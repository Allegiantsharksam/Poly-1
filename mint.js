async function main() {
    const [deployer] = await ethers.getSigners();
    const myNFT = await ethers.getContractAt("MyNFT", "YOUR_CONTRACT_ADDRESS");

    const ipfsURIs = [
        "ipfs://YOUR_IPFS_HASH_1",
        "ipfs://YOUR_IPFS_HASH_2",
        "ipfs://YOUR_IPFS_HASH_3",
        "ipfs://YOUR_IPFS_HASH_4",
        "ipfs://YOUR_IPFS_HASH_5"
    ];

    const prompts = [
        "Prompt description 1",
        "Prompt description 2",
        "Prompt description 3",
        "Prompt description 4",
        "Prompt description 5"
    ];

    for (let i = 0; i < ipfsURIs.length; i++) {
        let txn = await myNFT.createNFT(ipfsURIs[i], prompts[i]);
        await txn.wait();
        console.log(`Minted NFT ${i + 1}`);
    }
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
