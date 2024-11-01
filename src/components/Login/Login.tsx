


export function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen text-center">
            <form className="flex flex-col justify-center items-center w-3/4 max-w-md p-6 rounded-2xl shadow-lg m-5 bg-white bg-opacity-95 min-h-[500px]">
                <label htmlFor="login" className="text-4xl mb-4 text-black font-mono">Login</label>

                <label htmlFor="email" className="m-4 text-black text-2xl text-left font-sans">Email</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    required
                    className="m-3 p-4 border-b-2 border-transparent rounded-xl w-full focus:outline-none text-black focus:border-purple-800"
                />

                <label htmlFor="password" className="m-4 text-black text-2xl text-left font-sans">Senha</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    required
                    className="m-3 p-4 border-b-2 border-transparent rounded-xl w-full focus:outline-none text-black focus:border-purple-800"
                />
                
                <button 
                    type="submit" 
                    style={{ background: 'linear-gradient(90deg, #A3FFAC, #8A2BE2)' }}  
                    className="mt-6 text-white rounded-2xl p-4 w-2/4 font-serif text-lg transition duration-300 hover:opacity-80"
                >
                    Entrar
                </button>
                  
                <span className="text-black m-6 transition-all duration-300 ease-in-out hover:scale-105 hover:text-purple-800" > <a href="/register">Não tem conta? <strong>se cadastre</strong></a>
                </span>
            </form>
        </div>
    );
}