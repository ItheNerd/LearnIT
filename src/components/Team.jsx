import React from "react";

const Team = () => {
	return (
		<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-4">
			<div className="pb-12 text-center">
				<h2 className="text-base font-bold text-indigo-600">
					We have the best equipment
				</h2>
				<h1 className="font-heading text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
					Check our awesome team members
				</h1>
			</div>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
				<div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-12">
					<div className="mb-8">
						<img
							className="h-36 w-36 rounded-full object-cover object-center"
							src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
							alt="photo"
						/>
					</div>
					<div className="text-center">
						<p className="mb-2 text-xl font-bold text-gray-700">Dany Bailey</p>
						<p className="text-base font-normal text-gray-400">
							Software Engineer
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-12">
					<div className="mb-8">
						<img
							className="h-36 w-36 rounded-full object-cover object-center"
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
							alt="photo"
						/>
					</div>
					<div className="text-center">
						<p className="mb-2 text-xl font-bold text-gray-700">Lucy Carter</p>
						<p className="text-base font-normal text-gray-400">
							Graphic Designer
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-12">
					<div className="mb-8">
						<img
							className="h-36 w-36 rounded-full object-cover object-center"
							src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
							alt="photo"
						/>
					</div>
					<div className="text-center">
						<p className="mb-2 text-xl font-bold text-gray-700">Jade Bradley</p>
						<p className="text-base font-normal text-gray-400">Dev Ops</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-12">
					<div className="mb-8">
						<img
							className="h-36 w-36 rounded-full object-cover object-center"
							src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
							alt="photo"
						/>
					</div>
					<div className="text-center">
						<p className="mb-2 text-xl font-bold text-gray-700">Dany Bailey</p>
						<p className="text-base font-normal text-gray-400">
							Software Engineer
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-12">
					<div className="mb-8">
						<img
							className="h-36 w-36 rounded-full object-cover object-center"
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
							alt="photo"
						/>
					</div>
					<div className="text-center">
						<p className="mb-2 text-xl font-bold text-gray-700">Lucy Carter</p>
						<p className="text-base font-normal text-gray-400">
							Graphic Designer
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-12">
					<div className="mb-8">
						<img
							className="h-36 w-36 rounded-full object-cover object-center"
							src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
							alt="photo"
						/>
					</div>
					<div className="text-center">
						<p className="mb-2 text-xl font-bold text-gray-700">Jade Bradley</p>
						<p className="text-base font-normal text-gray-400">Dev Ops</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
