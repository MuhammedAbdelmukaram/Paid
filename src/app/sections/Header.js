import React from 'react';
import Image from "next/image";
import Link from 'next/link'; // Assuming you're using Next.js's Link component for navigation
import styles from './Header.module.css'
const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: "100%",
            zIndex:"2000",
            padding: '0.8rem 4rem', // Adjust padding as needed
            backgroundColor: '#141415', // Adjust the background color as needed
            color: '#fff', // Adjust the text color as needed
        }}>
            <div style={{
                display: 'flex',
                gap: '20rem', // Adjust the gap between logo and buttons as needed
                alignItems: 'center',
            }}>
                <Image
                    src="/PaidGreen.png"
                    alt="Logo"
                    width={75}
                    height={75}
                    priority
                />
                <div style={{
                    display: 'flex',
                    gap: '1rem', // Adjust the gap between buttons as needed
                }}>
                    <Link href="#products"><p className={styles.buttonStyle}>Products</p></Link>
                    <Link href="#tokenomics"><p className={styles.buttonStyle}>Tokenomics</p></Link>
                    <Link href="#roadmap"><p className={styles.buttonStyle}>Roadmap</p></Link>
                    <Link href="#team"><p className={styles.buttonStyle}>Team</p></Link>
                    <Link href="#how-to-buy"><p className={styles.buttonStyle}>How to Buy</p></Link>
                    <Link href="#faq"><p className={styles.buttonStyle}>FAQ</p></Link>
                </div>
            </div>

            <nav style={{
                display: 'flex',
                justifyContent: 'flex-end', // This will align the buttons to the right
                flexGrow: 1, // This will push the nav to occupy all remaining space
                gap: '1rem', // Adjust the gap between buttons as needed
            }}>
                <div style={{
                    display: 'flex',
                    alignItems:"center",
                    gap: '1rem', // Adjust the gap between buttons as needed
                    marginRight: 70,
                }}>
                    {/*<Link href="/visit-dapp"><p style={buttonStyleTwo}>Visit dApp</p></Link>*/}
                    <a href="https://20s-organization-2.gitbook.io/lets-talk-usdpaid-inc./roadmap" target="_blank" rel="noopener noreferrer" className={styles.buttonStyleThree}>Whitepaper</a>

                </div>

                <div className={styles.buttonStyleWP}>
                    <Image
                        src="/TelegramIcon.png"
                        alt="Logo"
                        width={26}
                        height={26}
                        priority
                        style={{marginRight:1}}
                    />
                </div>

                <div className={styles.buttonStyleWP}>
                    <Image
                        src="/twitterIcon.png"
                        alt="Logo"
                        width={26}
                        height={26}
                        priority

                    />
                </div>

            </nav>
        </header>
    );
};


export default Header;
