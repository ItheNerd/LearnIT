import React from "react";

const Testimonial = () => {
	return (
		<div className="relative z-10">
			<div className="w-full rotate-180 overflow-hidden bg-clip-content">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="block h-[260px] w-[200%]">
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="fill-blue-400"></path>
				</svg>
			</div>
			<div className="bg-blue-400">
				<section className="container mx-auto pb-5 text-center">
					<h1 className="mb-14 text-center text-3xl font-semibold capitalize text-white lg:text-4xl">
						Projects
					</h1>

					<div className="grid gap-6 md:grid-cols-3 xl:gap-x-12">
						<div className="mb-6 lg:mb-0">
							<div className="relative block rounded-lg bg-white shadow-lg">
								<div className="flex">
									<div
										className="relative mx-4 -mt-4 w-full overflow-hidden  rounded-lg bg-cover bg-no-repeat shadow-lg"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light">
										<img
											src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
											className="w-full"
										/>
										<a href="#!">
											<div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-gray-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>{" "}
										</a>
									</div>
								</div>
								<div className="p-6">
									<h5 className="mb-2 text-lg font-bold">Lorem Ipsum</h5>
									<h6 className="mb-4 font-medium text-blue-600">
										Lorem Ipsum
									</h6>

									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
										iure, incidunt recusandae quas ea officia facilis nemo
										aspernatur facere molestiae dolores neque, temporibus quae?
										Dignissimos sint libero quidem sunt commodi.
									</p>
								</div>
							</div>
						</div>

						<div className="mb-6 lg:mb-0">
							<div className="relative block rounded-lg bg-white shadow-lg">
								<div className="flex">
									<div
										className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light">
										<img
											src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
											className="w-full"
										/>
										<a href="#!">
											<div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-gray-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
										</a>
									</div>
								</div>
								<div className="p-6">
									<h5 className="mb-2 text-lg font-bold">Lorem Ipsum</h5>
									<h6 className="mb-4 font-medium text-blue-600">
										Lorem Ipsum
									</h6>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Delectus esse sint minima neque sapiente adipisci ullam
										soluta cum beatae, alias dignissimos incidunt recusandae
										quasi, fuga sed placeat reiciendis eveniet magni?
									</p>
								</div>
							</div>
						</div>

						<div className="mb-0">
							<div className="relative block rounded-lg bg-white shadow-lg">
								<div className="flex">
									<div
										className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light">
										<img
											src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
											className="w-full"
										/>
										<a href="#!">
											<div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-gray-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
										</a>
									</div>
								</div>
								<div className="p-6">
									<h5 className="mb-2 text-lg font-bold">Lorem Ipsum</h5>
									<h6 className="mb-4 font-medium text-blue-600">
										Lorem Ipsum
									</h6>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Delectus esse sint minima neque sapiente adipisci ullam
										soluta cum beatae, alias dignissimos incidunt recusandae
										quasi, fuga sed placeat reiciendis eveniet magni?
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="w-full rotate-180 overflow-hidden bg-blue-400">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="block h-[260px] w-[200%]">
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="fill-white"></path>
				</svg>
			</div>
		</div>
	);
};

export default Testimonial;
