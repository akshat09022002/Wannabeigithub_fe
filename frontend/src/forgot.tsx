import React from "react"

import './App.css'

function Forgot() {
 

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
	<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
		<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Enter your Email</h1>
		<form action="#">
			<div className="mb-4">
				<label for="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required></input>
			</div>
			
			
			<button onClick="alert(hello)" type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">send link</button>
		</form>
	</div>
</div>
  )
}

export default Forgot