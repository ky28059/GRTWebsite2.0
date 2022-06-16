import Head from 'next/head';


export default function Home() {
    return (
        <div>
            <Head>
                <title>GRT | Home</title>
            </Head>

            <main className="bg-gradient-to-br from-orange-400 to-pink-600 via-red-500 h-screen flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-60">
                    <h1 className="text-3xl font-bold mb-2">GRT</h1>
                    <p>The Gunn robotics team is the coolest place to be.</p>
                </div>
            </main>
        </div>
    )
}
