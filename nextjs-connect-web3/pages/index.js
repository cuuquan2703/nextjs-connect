import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useWeb3React} from "@web3-react/core"
import {InjectedConnector} from "@web3-react/injected-connector"
export default function Home() {
    
    const {activate,active,library:provider} = useWeb3React()
    const connector = new InjectedConnector()
    console.log("Connector",connector)
    console.log("Activate:",activate)
    console.log("Active:",active)
    console.log("Lib:",provider)
    const Connect =async ()=>{
        try {
            await activate(connector)
        }catch(e){
            console.log(e)
        }
    }

  return (

      <div className={styles.container}>
          <button onClick={Connect}>
          Connect
          </button>
      </div>
  )
}
