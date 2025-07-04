import React from 'react'

export default function page() {
  return (
    <main class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
           
            <div class="space-y-4">
               
                <div class="bg-white rounded-lg shadow-lg aspect-square flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nike Air Max 2024" class="rounded-lg"/>
                </div>
                <div class="grid grid-cols-4 gap-2">
                    <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thumbnail 1" class="rounded-lg cursor-pointer hover:opacity-75"/>
                    <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thumbnail 2" class="rounded-lg cursor-pointer hover:opacity-75"/>
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thumbnail 3" class="rounded-lg cursor-pointer hover:opacity-75"/>
                    <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thumbnail 4" class="rounded-lg cursor-pointer hover:opacity-75"/>
                </div>
            </div>

           
            <div class="space-y-6">
                <div>
                    <h1 class="text-3xl font-bold text-gray-900">Nike Air Max 2024</h1>
                    <p class="text-gray-500">Men's Running Shoes</p>
                </div>

                <div class="flex items-center space-x-2">
                    <div class="flex text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <span class="text-gray-600">(128 Reviews)</span>
                </div>

                <div>
                    <span class="text-2xl font-bold text-gray-900">$179.99</span>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-2">Select Size</h3>
                    <div class="grid grid-cols-4 gap-2">
                        <button class="border rounded-md py-2 hover:border-black">US 8</button>
                        <button class="border rounded-md py-2 hover:border-black">US 8.5</button>
                        <button class="border rounded-md py-2 hover:border-black">US 9</button>
                        <button class="border rounded-md py-2 hover:border-black">US 9.5</button>
                        <button class="border rounded-md py-2 hover:border-black">US 10</button>
                        <button class="border rounded-md py-2 hover:border-black">US 10.5</button>
                        <button class="border rounded-md py-2 hover:border-black">US 11</button>
                        <button class="border rounded-md py-2 hover:border-black">US 11.5</button>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-2">Quantity</h3>
                    <div class="flex items-center space-x-2">
                        <button class="border rounded-md p-2 hover:border-black"><i class="fas fa-minus"></i></button>
                        <input type="number" value="1" min="1" class="w-16 text-center border rounded-md p-2"/>
                        <button class="border rounded-md p-2 hover:border-black"><i class="fas fa-plus"></i></button>
                    </div>
                </div>

                <div class="space-y-4">
                    <button class="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800">Add to Cart</button>
                    <button class="w-full border border-black py-4 rounded-full hover:bg-gray-100">Favorite <i class="far fa-heart ml-2"></i></button>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-2">Product Description</h3>
                    <p class="text-gray-600">Experience the future of comfort with the Nike Air Max 2024. Featuring innovative cushioning technology, breathable mesh upper, and responsive foam midsole. Perfect for both athletic performance and casual wear. The dynamic design provides enhanced stability and support for all-day comfort.</p>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-2">Features</h3>
                    <ul class="list-disc list-inside text-gray-600 space-y-2">
                        <li>Dynamic Air cushioning system</li>
                        <li>Breathable mesh upper with Flywire cables</li>
                        <li>Foam midsole for responsive cushioning</li>
                        <li>Rubber outsole for durable traction</li>
                        <li>Reflective details for visibility in low light</li>
                    </ul>
                </div>
            </div>
        </div>

        
        <section class="mt-16">
            <h2 class="text-2xl font-bold mb-6">Customer Reviews</h2>
            <div class="space-y-6">
               
                <div class="bg-white p-6 rounded-lg shadow">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <div class="flex text-yellow-400 mb-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h3 class="font-semibold">Michael R.</h3>
                        </div>
                        <span class="text-gray-500">2 days ago</span>
                    </div>
                    <p class="text-gray-600">These shoes are amazing! The comfort level is unmatched and they look even better in person. Highly recommend for both running and casual wear.</p>
                </div>

                
                <div class="bg-white p-6 rounded-lg shadow">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <div class="flex text-yellow-400 mb-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <h3 class="font-semibold">Sarah L.</h3>
                        </div>
                        <span class="text-gray-500">1 week ago</span>
                    </div>
                    <p class="text-gray-600">Great shoes overall. The cushioning is perfect for long runs. Only downside is they run slightly small, so order half a size up.</p>
                </div>
            </div>
        </section>
    </main>
  )
}
