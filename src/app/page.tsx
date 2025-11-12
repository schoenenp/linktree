"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-br from-pirrot-blue-950 via-pirrot-blue-900 to-pirrot-blue-950">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-12">
				<div className="absolute inset-0 bg-[url('/grid_bg.svg')] bg-repeat opacity-15"></div>
				<div className="absolute inset-0 bg-linear-to-br from-pirrot-blue-900/20 via-transparent to-pirrot-blue-800/15"></div>
			</div>

			{/* Floating Elements */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute top-16 left-12 h-40 w-40 animate-pulse rounded-full bg-pirrot-blue-500/6 blur-2xl duration-4000"></div>
				<div className="absolute top-32 right-16 h-32 w-32 animate-pulse rounded-full bg-pirrot-red-400/5 blur-xl delay-1000 duration-5000"></div>
				<div className="absolute bottom-24 left-1/3 h-48 w-48 animate-pulse rounded-full bg-pirrot-green-400/4 blur-3xl delay-2000 duration-6000"></div>
				<div className="absolute right-12 bottom-16 h-36 w-36 animate-pulse rounded-full bg-pirrot-blue-400/5 blur-2xl delay-500 duration-4500"></div>
			</div>

			<motion.div
				animate={{ opacity: 1 }}
				className="relative z-40 flex flex-col items-center justify-center gap-20 px-6 py-12"
				initial={{ opacity: 0 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
			>
				{/* Decorative background card */}
				<div className="-m-12 absolute inset-0 rounded-[2.5rem] border border-white/8 bg-pirrot-blue-50/2 shadow-2xl backdrop-blur-md"></div>

				{/* Logo */}
				<motion.div
					animate={{ scale: 1 }}
					className="relative z-20 mb-8"
					initial={{ scale: 0.8 }}
					transition={{
						delay: 0.1,
						duration: 0.8,
						type: "spring",
						stiffness: 200,
						damping: 15,
					}}
				>
					<div className="relative flex items-center justify-center">
						<motion.div
							animate={{ opacity: 0.2 }}
							className="absolute inset-0 scale-150 rounded-full bg-linear-to-r from-pirrot-blue-500/20 to-pirrot-red-500/20 blur-xl"
							initial={{ opacity: 0 }}
							transition={{
								delay: 0.1,
								duration: 0.8,
								ease: "easeOut",
							}}
						></motion.div>
						<div className="relative animate-float rounded-full border border-white/20 p-4 shadow-2xl">
							<Image
								alt="Pirrot Logo"
								className="h-16 w-16 drop-shadow-lg"
								height={64}
								src="/logo.svg"
								width={64}
							/>
						</div>
					</div>
				</motion.div>

				<motion.h1
					animate={{ y: 0, opacity: 1 }}
					className="relative text-center font-black font-cairo text-5xl text-pirrot-blue-50 uppercase tracking-wide md:text-7xl"
					initial={{ y: 30, opacity: 0 }}
					transition={{
						delay: 0.3,
						duration: 1,
						type: "spring",
						stiffness: 100,
					}}
				>
					<span className="relative z-10 bg-linear-to-r from-white via-pirrot-blue-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
						Hey, schön dass du da bist!
					</span>
					<div className="absolute inset-0 scale-110 bg-linear-to-r from-pirrot-blue-500/15 to-pirrot-red-500/15 opacity-60 blur-2xl"></div>
				</motion.h1>

				<motion.div
					animate={{ opacity: 1 }}
					className="relative max-w-3xl text-center font-medium text-pirrot-blue-200/90 text-xl leading-relaxed tracking-wide"
					initial={{ opacity: 0 }}
					transition={{ delay: 0.5, duration: 0.8 }}
				>
					<span className="relative z-10 drop-shadow-md">
						Wir haben uns gedacht, wir machen's dir einfach: Such dir aus, was
						du brauchst. <br /> Wir kümmern uns um den Rest!
					</span>
					<div className="absolute inset-0 rounded-xl bg-linear-to-r from-pirrot-blue-500/8 to-pirrot-red-500/8 blur-md"></div>
				</motion.div>

				<motion.div
					animate={{ opacity: 1, y: 0 }}
					className="relative flex w-full max-w-4xl flex-col gap-12 sm:flex-row"
					initial={{ opacity: 0, y: 30 }}
					transition={{ delay: 0.7, duration: 1, staggerChildren: 0.3 }}
				>
					<motion.div
						className="flex-1"
						whileHover={{ scale: 1.03, rotateY: 3 }}
						whileTap={{ scale: 0.97 }}
					>
						<Link
							className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-4xl border border-pirrot-blue-500/40 bg-linear-to-br from-pirrot-blue-800/95 via-pirrot-blue-700/90 to-pirrot-blue-600/95 p-10 font-bold text-pirrot-blue-50 uppercase shadow-2xl backdrop-blur-md transition-all duration-700 hover:border-pirrot-blue-300/60 hover:shadow-3xl hover:shadow-pirrot-blue-400/20"
							href="https://www.pirrot.de"
						>
							{/* Animated background gradient */}
							<div className="absolute inset-0 bg-linear-to-br from-pirrot-blue-500/10 via-transparent to-pirrot-blue-700/15 opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>

							{/* Subtle glow effect */}
							<div className="absolute inset-0 rounded-4xl bg-pirrot-blue-400/5 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"></div>

							<div className="relative z-10 mb-6 text-5xl drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
								🖨️
							</div>
							<span className="relative z-10 font-black text-2xl tracking-wide drop-shadow-lg transition-colors duration-500 group-hover:text-white">
								Druck & Textil
							</span>
							<span className="relative z-10 mt-3 font-medium text-base opacity-90 transition-opacity duration-500 group-hover:opacity-100">
								Alles was du brauchst
							</span>

							{/* Elegant corner accent */}
							<div className="absolute top-4 right-4 h-8 w-8 rounded-tr-xl border-pirrot-blue-200/40 border-t-2 border-r-2"></div>
							<div className="absolute bottom-4 left-4 h-6 w-6 rounded-bl-lg border-pirrot-blue-300/20 border-b-2 border-l-2"></div>
						</Link>
					</motion.div>

					<motion.div
						className="flex-1"
						whileHover={{ scale: 1.03, rotateY: -3 }}
						whileTap={{ scale: 0.97 }}
					>
						<Link
							className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-4xl border border-pirrot-red-500/40 bg-linear-to-br from-pirrot-red-800/95 via-pirrot-red-700/90 to-pirrot-red-600/95 p-10 font-bold text-pirrot-red-50 uppercase shadow-2xl backdrop-blur-md transition-all duration-700 hover:border-pirrot-red-300/60 hover:shadow-3xl hover:shadow-pirrot-red-400/20"
							href="http://www.beschriftungsservice.de"
						>
							{/* Animated background gradient */}
							<div className="absolute inset-0 bg-liner-to-br from-pirrot-red-500/10 via-transparent to-pirrot-red-700/15 opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>

							{/* Subtle glow effect */}
							<div className="absolute inset-0 rounded-4xl bg-pirrot-red-400/5 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"></div>

							<div className="relative z-10 mb-6 text-5xl drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
								🏷️
							</div>
							<span className="relative z-10 font-black text-2xl tracking-wide drop-shadow-lg transition-colors duration-500 group-hover:text-white">
								Beschriftung & Labels
							</span>
							<span className="relative z-10 mt-3 font-medium text-base opacity-90 transition-opacity duration-500 group-hover:opacity-100">
								Beschriftung aller Art.
							</span>

							{/* Elegant corner accent */}
							<div className="absolute top-4 right-4 h-8 w-8 rounded-tr-xl border-pirrot-red-200/40 border-t-2 border-r-2"></div>
							<div className="absolute bottom-4 left-4 h-6 w-6 rounded-bl-lg border-pirrot-red-300/20 border-b-2 border-l-2"></div>
						</Link>
					</motion.div>
				</motion.div>

				<motion.div
					animate={{ opacity: 1 }}
					className="relative text-center"
					initial={{ opacity: 0 }}
					transition={{ delay: 1.2, duration: 0.8 }}
				>
					<div className="inline-block rounded-4xl border border-white/12 bg-pirrot-blue-50/3 px-8 py-4 shadow-xl backdrop-blur-md">
						<p className="font-semibold text-pirrot-blue-200/80 text-sm tracking-wide drop-shadow-md">
							Dein Pirrot-Team • Über 25 Jahre Erfahrung in Druck & Beschriftung
						</p>
					</div>
				</motion.div>
			</motion.div>
		</main>
	);
}
