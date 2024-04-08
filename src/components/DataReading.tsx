import { useState } from 'react';

export function DataReading({ apis, color, neon }: { apis: any, color: string, neon?:string }) {
    var currentApi = apis.filter((api: any) => { return api.active == true })[0]
    const activeColor = color.replaceAll("hover:", "")
    
    currentApi = (currentApi == null || currentApi == "undefined") ? apis[0] : currentApi


    //const response = fetch(currentApi.url)
    const response = `Esto es una prueba de respuesta de la API \n
    Todo el contenido debe mostrarse aqui`

    const [currentIndex, setCurrentIndex] = useState(0);

    function setCurrentApi(index:number, currentApi: any) {
        apis.map((api: any) => { api.active = false })
        apis.map((api: any) => { (api == currentApi) ? api.active = true : null })
        currentApi = currentApi
        setCurrentIndex(index)
    }

    return (
        <article className='p-4'>
            <a href='/'><h1 className={neon + " mb-4"}>Volver</h1></a>
        <div className='grid grid-cols-2 gap-4  font-tilt-neon h-full'>
            <div className='flex flex-col gap-2 max-h-[40vh]'>
                    <h1 className='text-2xl font-tilt-neon font-[100]'>Metodos</h1>
                    <div className='overflow-scroll hidden-scrollbar'>
                    {
                        apis.map((api: any, index: number) => {
                            console.log(api)
                            const activeClasses = (api.operation==currentApi.operation)?activeColor:color
                            return (
                                <div onClick={setCurrentApi.bind(this, index, api)} key={index} className={'flex flex-col border py-3 px-4 bg-opacity-20 ' + activeClasses}>
                                    {api.operation}
                                    <span>{api.value.method}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="font-tilt-neon">
                <h1 className='text-2xl font-[100]'>Descripción</h1>
                <p className="text-lg font-[100] text-pretty">
                    {(currentApi.value.schema.description) ? currentApi.value.schema.description : currentApi.value.schema.summary}
                </p>
            </div>
            <div className="font-tilt-neon min-h-[45vh] ">
                <h1 className='text-2xl font-[100]'>Respuesta</h1>
                <div className={'p-4 border border-white rounded h-full bg-[#0a2a3d] font-tilt-neon '}>
                    <pre>{response}</pre>
                </div>
            </div>
            <div className={'flex flex-col'}>
                <h1 className='text-2xl font-[100]'>Parámetros</h1>
                <div className='flex flex-col p-4 gap-4'>
                    {
                        (currentApi.value.schema.parameters) ?
                            (currentApi.value.schema.parameters).map((parameter: any, index: number) => {
                                return (
                                    <div key={index} className='flex flex-col bg-opacity-20'>
                                        <span className='mb-2'>{parameter.name}</span>
                                        <input type='text' className='bg-transparent border py-2 border-white' />
                                    </div>
                                )
                            })
                        : "No hay parametros"
                    }

                    <span className={"border bg-transparent px-6 py-2 font-[50] text-lg w-36 text-center " + color }>
                        Ejecutar
                    </span>
                </div>
            </div>
        </div>            
        </article>
    )
}
