import React from "react";
import { motion, SVGMotionProps } from "framer-motion";

interface MenuToggleProps {
	toggle: () => void;
}

interface HamburgerMenuProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Path: React.FC<SVGMotionProps<SVGPathElement>> = (props) => (
	<motion.path
		fill="transparent"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		{...props}
	/>
);

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
	<motion.button
		whileHover={{
			scale: 1.08,
			transition: { duration: 0.1, ease: [0.17, 0.67, 0.83, 0.67] },
		}}
		onClick={toggle}
		className="flex items-center justify-center z-[9999]"
		aria-label="Toggle menu">
		<svg className="stroke-white" width="32" height="32" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: { d: "M 1 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
				transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
			/>
			<Path
				d="M 3 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
			/>
			<Path
				variants={{
					closed: { d: "M 6 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
				transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
			/>
		</svg>
	</motion.button>
);

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, setIsOpen }) => {
	const toggleMenu = () => setIsOpen((prev) => !prev);

	return (
		<motion.div
			initial={false}
			animate={isOpen ? "open" : "closed"}
			className="">
			<MenuToggle toggle={toggleMenu} />
		</motion.div>
	);
};

export default HamburgerMenu;
