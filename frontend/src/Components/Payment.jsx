import styles from "../Style/payment.module.css";
import { Avatar, AvatarGroup,Divider,Button } from '@chakra-ui/react'
import { AiOutlineUser } from "react-icons/ai";
import { ArrowBackIcon, CheckCircleIcon } from "@chakra-ui/icons"
import { Icon } from "@chakra-ui/react";
function Payment() {

    return (
        <>
            <div className={styles.payment}>
                <div className={styles.head}>
                    <img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.66" alt="" />
                    <div className={styles.user}>
                        <AvatarGroup spacing='1rem'>
                            <Avatar bg='black' icon={<AiOutlineUser fontSize='1.5rem' />} />
                        </AvatarGroup>
                        <h1>Welcome rajan <br /> rajanrao@gmail.com </h1>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.midhead}>
                        <h2> <Icon as={ArrowBackIcon} /> Make Payment</h2>
                    </div>
                    <div className={styles.payfirst}>
                        <div>
                            <h1>Premium HD</h1>
                            <h2>Premium HD</h2>
                        </div>
                        <div>
                            <h1>₹699  <Icon as={CheckCircleIcon} color='green' /></h1>
                        </div>
                    </div>
                    <div className={styles.paysec}>
                        <div>
                            <h1>Logged In</h1>
                            <p>rajanrao@gmail.com </p>
                            <AvatarGroup mt='3' ml='4' spacing='1rem'>
                                <Avatar bg='rgb(240,219,234)' icon={<AiOutlineUser fontSize='1.5rem' />} />
                            </AvatarGroup>
                        </div>
                    </div>
                    <div className={styles.midpart}>
                        <div className={styles.insideMidPart}>
                            <div className={styles.firstpart}>
                                <button>UPI</button>
                                <button>Credit Card/Debit</button>
                                <button>Wallets</button>
                                <button>Net Banking</button>
                            </div>
                            <div className={styles.secpart}>
                                <p>UPI</p>
                                <Divider mt='2' />
                                <h2>UPI ID/VPA</h2>
                                <Divider mt='5' />
                                <input type='text' placeholder="e.g. rajan@ybl" />
                                <Divider />
                                <Button bg='green.600'  w='52' h='14' >Pay Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.foot2}>
                    <Divider paddingTop='12' color='whiteAlpha.900' bg='whatsapp.900' />
                    <div className={styles.diflex}>
                        <div>
                            <p>Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights reserved.</p>
                        </div>
                        <div>
                            <p>About us | Help Center | Privacy Policy | Terms of Use | Preferences</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Payment;
