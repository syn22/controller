use cainome::cairo_serde::{CairoSerde, ContractAddress, U256};
use starknet::{
    accounts::{Account, Call},
    macros::{felt, selector},
    providers::Provider,
    signers::SigningKey,
};

use crate::{
    abigen::erc_20::Erc20,
    account::session::{
        hash::{AllowedMethod, Session},
        raw_session::RawSession,
        SessionAccount,
    },
    signers::HashSigner,
    tests::{account::FEE_TOKEN_ADDRESS, ensure_txn, runners::katana::KatanaRunner},
};

#[tokio::test]
async fn test_verify_external_owner() {
    let runner = KatanaRunner::load();
    let signer = SigningKey::from_random();
    let guardian_signer = SigningKey::from_random();
    let external_account = runner.executor().await;
    let controller = runner
        .deploy_controller("username".to_owned(), &signer)
        .await;

    ensure_txn(
        controller
            .contract
            .register_external_owner(&external_account.address().into()),
        runner.client(),
    )
    .await
    .unwrap();

    let session_signer = SigningKey::from_random();
    let session = Session::new(
        vec![AllowedMethod::with_selector(
            *FEE_TOKEN_ADDRESS,
            selector!("transfer"),
        )],
        u64::MAX,
        &session_signer.signer(),
    )
    .unwrap();

    ensure_txn(
        external_account.execute_v1(vec![Call {
            to: controller.address(),
            selector: selector!("register_session"),
            calldata: [
                <RawSession as CairoSerde>::cairo_serialize(&session.raw()),
                vec![external_account.address()],
            ]
            .concat(),
        }]),
        runner.client(),
    )
    .await
    .unwrap();

    let session = SessionAccount::new_as_registered(
        runner.client(),
        session_signer,
        guardian_signer,
        controller.address(),
        runner.client().chain_id().await.unwrap(),
        external_account.address(),
        session,
    );

    let new_account = ContractAddress(felt!("0x18301129"));

    ensure_txn(
        Erc20::new(*FEE_TOKEN_ADDRESS, &session).transfer(
            &new_account,
            &U256 {
                low: 0x10_u128,
                high: 0,
            },
        ),
        runner.client(),
    )
    .await
    .unwrap();
}
