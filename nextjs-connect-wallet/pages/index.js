import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ethers} from 'ethers' 
import {useState} from 'react'

export default function Home() {

    const [connected,setConnected] = useState(false)
    const [signers,setSigners] = useState()

    const Connect = async ()=>{
        if (typeof window.ethereum != undefined){
            try {
                await window.ethereum.request({method:'eth_requestAccounts'})
                setConnected(true)
                let Provider = new ethers.providers.Web3Provider(window.ethereum)
                setSigners(Provider.getSigner())
                console.log("Signers:", Provider.getSigner())
                console.log(signers)
            }catch(e){
                console.log(e)
            }
        }
        else {
            setConnected(false)
        }
    }

  return (
      <div className={styles.container}>
          <button onClick={Connect}> Connect </button>
      </div>
  )
}
