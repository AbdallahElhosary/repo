import React from 'react'
import Image from 'next/image'
import img1 from "../../assets/msg1246182069-95768.jpg"
import Head from 'next/head'
import Link from 'next/link'
export default function login() {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <header class="login mb-5">
                <div class="text-center">
                    <h1>EL-Kotab</h1>
                    <Image src={img1} alt="logo" width={100} height={200} />
                </div>
            </header>
            <div class="container">
                <form class="login row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <div class="form-group text-center mb-3">
                            <input type="text" placeholder="اسم المستخدم" />
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <div class="form-group text-center mb-3">
                            <input
                                id="pass"
                                type="password" placeholder="كلمة السر" />
                            <i class="fa-solid fa-lock"></i>
                            <i
                                id="iconpass"
                                class="fa-solid fa-eye"></i>
                        </div>
                        <div class="text-center mb-3">
                            <Link
                                class="abtn"
                                href="/categories">
                                تسجيل الدخول
                            </Link>
                        </div>
                        <Link href="" class="d-block text-center mb-2">
                            نسيت كلمة السر ... ؟
                        </Link>
                        <Link href="/Signup" class="d-block text-center mb-2">
                            مستخدم جديد ... ؟
                        </Link>
                    </div>
                    <div class="col-md-4"></div>
                </form>
            </div>
        </>
    )
}
