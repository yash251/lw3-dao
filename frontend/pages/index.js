import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Contract, providers } from 'ethers'
import { formatEther } from 'ethers/lib/utils'
import React, { useState, useEffect, useRef } from 'react'
import Web3Modal from 'web3modal'
import {
  CRYPTODEVS_DAO_ABI,
  CRYPTODEVS_DAO_CONTRACT_ADDRESS,
  CRYPTODEVS_NFT_ABI,
  CRYPTODEVS_NFT_CONTRACT_ADDRESS,
} from "../constants";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
