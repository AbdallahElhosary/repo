import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function Signup() {
    return (
      <>
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <section class="signup">
        <div class="container">
            <form class="login row">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <div class="form-group text-center mb-3">
                        <input type="text" placeholder="الاسم الاول " />
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div class="form-group text-center mb-3">
                        <input type="text" placeholder="الاسم الاخير " />
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div class="form-group text-center mb-3">
                        <input type="text" placeholder="عدد الاجزاء المحفوظة" />
                        <i class="fa-regular fa-clock"></i>
                    </div>
                    <div class="form-group text-center mb-3">
                        <input 
                        id="pass"
                        type="password" placeholder="تعيين كلمة السر" />
                        <i class="fa-solid fa-lock"></i>
                        <i 
                        id="iconpass"
                        class="fa-solid fa-eye"></i>
                    </div>
                    <div class="text-center mb-3">
                        <Link 
                        class="abtn"
                        href="/categories">
                            انشاء حساب
                        </Link>
                    </div>
                    <Link href="/" class="d-block text-center mb-2">
                        تسجيل الدخول ... ؟
                    </Link>
                </div>
                <div class="col-md-4"></div> 
            </form>
        </div>
    </section>
      </>
    
  )
}
