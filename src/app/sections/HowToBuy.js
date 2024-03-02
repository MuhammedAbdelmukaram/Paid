import React from 'react';
import Image from "next/image";
import styles from "./HowToBuy.module.css";

const HowToBuy = () => {
    return (
        <div style={{display:"flex", gap:130, width:"100%", justifyContent:"center"}}>
            <div className={styles.container}>
                <div className={styles.text}>Step 1</div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/PaidGreen.png" // Specify the path to your image
                        alt="Descriptive Alt Text"
                        width={500} // Set your image's width
                        height={300} // Set your image's height
                        layout='responsive' // This makes the image scale nicely to the parent's width
                    />
                </div>
                <div className={styles.text}>Lorem Ipsum sit amet dolor et alas doasr fie alt coin is very cool thing
                    because this is dummy text
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.text}>Step 2</div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/PaidGreen.png" // Specify the path to your image
                        alt="Descriptive Alt Text"
                        width={500} // Set your image's width
                        height={300} // Set your image's height
                        layout='responsive' // This makes the image scale nicely to the parent's width
                    />
                </div>
                <div className={styles.text}>Lorem Ipsum sit amet dolor et alas doasr fie alt coin is very cool thing
                    because this is dummy text
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.text}>Step 3</div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/PaidGreen.png" // Specify the path to your image
                        alt="Descriptive Alt Text"
                        width={500} // Set your image's width
                        height={300} // Set your image's height
                        layout='responsive' // This makes the image scale nicely to the parent's width
                    />
                </div>
                <div className={styles.text}>Lorem Ipsum sit amet dolor et alas doasr fie alt coin is very cool thing
                    because this is dummy text
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.text}>Step 4</div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/PaidGreen.png" // Specify the path to your image
                        alt="Descriptive Alt Text"
                        width={500} // Set your image's width
                        height={300} // Set your image's height
                        layout='responsive' // This makes the image scale nicely to the parent's width
                    />
                </div>
                <div className={styles.text}>Lorem Ipsum sit amet dolor et alas doasr fie alt coin is very cool thing
                    because this is dummy text
                </div>
            </div>
        </div>

    );
};

export default HowToBuy;