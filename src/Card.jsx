function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-green-500 to-green-600">
                <div class="w-1/2 h-5/4 bg-white rounded-lg shadow-2xl p-8 m-8">
                    <h1 class="block w-full text-center tect-gray-800 text-3xl font-bold mb-2">
                        KTP
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                        <img class="rounded -lg w-40 h-60" src="j.jpg"/>
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
                                Nama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                             <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Tempat Lahir"
                            >
                                Tempat Lahir
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Tempat Lahir"
                                id="naam"
                            />
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Tgl Lahir"
                            >
                                Tgl Lahir
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Tgl Lahir"
                                id="naam"
                            />
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Jenis Kelamin"
                            >
                                Jenis Kelamin
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Jenis Kelamin"
                                id="naam"
                            />
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Agama"
                            >
                                Agama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Agama"
                                id="naam"
                            />
                        </div>
                        <button
                        class="block bg-blue-500 hover:bg-blue-200 text-white uppercase text-lg mx-auto p-1 rounded"
                        type="submit"
                        >
                            Buat Akun
                        </button>
                    </form>
                    <a
                        class="block w-full text-center no-underline mt- text-sm text-gray-700 hover:text-gry-900"
                        href="/"
                    >
                        Telah Memiliki Akun?
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;