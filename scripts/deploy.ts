import { ethers, run } from 'hardhat'

import { CryptusNFT__factory, CryptusToken__factory } from '../typechain-types'

async function main() {
  const [signer] = await ethers.getSigners()

  const cryptusToken = await new CryptusToken__factory(signer).deploy()

  await cryptusToken.deployed()

  console.log('CryptusToken deployed to:', cryptusToken.address)

  const cryptusNFT = await new CryptusNFT__factory(signer).deploy()

  await cryptusNFT.deployed()

  console.log('CryptusNFT deployed to:', cryptusToken.address)

  await cryptusNFT.safeMint(
    signer.address,
    'https://bafybeiak2bn6dcucitmpyhxce2oksyi66fw2f7iycy7b3zbj5dm7wb4nau.ipfs.infura-ipfs.io/'
  )

  await run('verify:verify', {
    address: cryptusToken.address,
    contract: 'contracts/CryptusToken.sol:CryptusToken'
  })

  await run('verify:verify', {
    address: cryptusNFT.address,
    contract: 'contracts/CryptusNFT.sol:CryptusNFT'
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
