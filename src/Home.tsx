import SHClient from "@/lib/apiClient.ts";

async function Home()
{
    const movies = await SHClient.getAllMovies();



    return (
        <div className="w-full h-full">
            <div className='max-w-full'>
                <div className='p-4 w-full h-full justify-items-center grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-x-2 gap-y-4 sm:gap-x-4'
                >
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img alt='Tenet' className='h-[225px] w-[150px] bg-amber-300 rounded-2xl' src='https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg' ></img>
                        <div className='flex flex-col justify-center relative'>
                            <h1 className='ml-2 pt-2 text-lg'>Tenet</h1>
                            <p className='ml-2 text-sm text-muted-foreground absolute top-8'>2025</p>
                            <div className='pb-2'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;