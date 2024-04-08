import { useState } from 'react';

export function Search({ paths }: { paths: any }) {
    const [filter, setFilter] = useState("know");
    const filterMethods = (event: any) => { setFilter(event) }

    const getColor = (action: string) => {
        if (action === "router") return "hover:border-sofia-green text-sofia-green hover:bg-sofia-green hover:bg-opacity-20 hover:cursor-pointer"
        if (action.includes("vector_index")) return "hover:border-sofia-blue text-sofia-blue hover:bg-sofia-blue hover:bg-opacity-20 hover:cursor-pointer"
        if (action === "datasource") return "hover:border-sofia-yellow text-sofia-yellow hover:bg-sofia-yellow hover:bg-opacity-20 hover:cursor-pointer"
        if (action === "settings") return "hover:border-sofia-yellow text-sofia-yellow hover:bg-sofia-yellow hover:bg-opacity-20 hover:cursor-pointer"
        if (action.includes("knowledge")) return "hover:border-sofia-salmon text-sofia-salmon hover:bg-sofia-salmon hover:bg-opacity-20 hover:cursor-pointer"
        if (action.includes("chat")) return "hover:border-sofia-purple text-sofia-purple hover:bg-sofia-purple hover:bg-opacity-20 hover:cursor-pointer"
        if (action.includes("upload_file")) return "hover:border-sofia-purple text-sofia-purple hover:bg-sofia-purple hover:bg-opacity-20 hover:cursor-pointer"
        return "bg-gray-500"
    }

    const getNeon = (action: string) => {
        if (action === "router") return "neonGreen"
        if (action.includes("knowledge")) return "neonSalmon"
        if (action === "datasource") return "neonYellow"
        if (action === "settings") return "neonYellow"
        if (action === "vector_index") return "neonBlue"
        if (action.includes("chat")) return "neonPurple"
        if (action.includes("upload_file")) return "neonPurple"
        return "bg-gray-500"
    }

    const getCategories = ():string[] => {
        let categories: string[] = []
        Object.keys(paths).map((action) => {
            categories.indexOf(action.split("/")[2]) === -1 ? categories.push(action.split("/")[2]) : null ;
        })
        return categories
    }

    const getShort = (action: string): string => {
        return action.charAt(0).toUpperCase() + action.slice(1, 3)
    }

    const getURL = (action: string): string => {
        let allPaths = Object.keys(paths)
        let fullUrl = allPaths.filter((path) => {
            return path.includes(action)
        })[0]
        let url = fullUrl.split("/")
        return url[0] + "/" + url[1] + "/" + url[2]

    }

    return (
        <article>

            <h1
                className="text-6xl text-center font-tilt-neon font-[50] uppercase text-sofia-salmon mb-12 neonGreen text-pretty"
                >
                ¿Qué estás buscando?
            </h1>
            
            <div className="relative z-0 mb-6 group w-2/4 mx-auto ">
                <input
                    type="text"
                    name="search"
                    className="autofill:bg-transparent block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-sofia-green peer"
                    placeholder=" "
                    id="search"
                    onChange={(event) =>
                        filterMethods(event.target.value)
                    }
                    />
                <label
                    htmlFor="search"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sofia-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    <span className="flex gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                            ><path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path><path
                            d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
                            ></path><path d="M21 21l-6 -6"></path></svg
                        >
                        Api o Método
                    </span>
                </label>
            </div>
            
            <div className="grid gap-6 grid-cols-4 w-5/6 mx-auto mt-12">
                {
                    getCategories()
                        .filter((key) => {
                            return key.toLowerCase().includes(filter.toLowerCase());
                        })
                        .map((key) => {
                            return (
                                <a href={ getURL(key) }>

                                    <div className={"border rounded-md h-56 xl:h-96 flex flex-col border-gray-700 bg-black bg-opacity-25 " + getColor(key) } key={key}>
                                        <div className="flex flex-1 flex-col items-center text-center justify-beetween mb-2">
                                            <div className="flex-1 flex justify-center items-center">
                                                <h2 className={"text-center text-3xl fontStar " + getNeon(key)}>{getShort(key)}</h2>
                                            </div>
                                            <h2 className="text-center text-lg">{key}</h2>

                                        </div>
                                        
                                        <span className='text-gray-500 text-center border-t border-gray-500 py-1'>Otra info</span>
                                    </div>
                                </a>
                            )
                        })
                }
            </div>  
        </article>
    )
}