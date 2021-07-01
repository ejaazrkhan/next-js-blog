import react from 'react'

function Blog(props) {
    return(
        <div className="my-4 w-1/2 ">
            <div className="max-w-sm w-full lg:max-w-full lg:flex h-full px-4">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url("+props['blogDetails']['image']+")"}} title="Woman holding a mug">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                    
                    <div className="text-gray-900 font-bold text-xl mb-2 flex justify-between">{props['blogDetails']['title']}
                        <span className="table bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold" style={{display: props['blogDetails']['isFeatured'] == 0 && "none"}}>
                            Featured
                        </span>
                    </div>
                    <p className="text-gray-700 text-base">{props['blogDetails']['content']}</p>
                    </div>
                    <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="https://picsum.photos/10/10" alt={props['blogDetails']['author']} />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{props['blogDetails']['author']}</p>
                        <p className="text-gray-600">{props['blogDetails']['publishDate']}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog