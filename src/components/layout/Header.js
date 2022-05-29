import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./partials/Logo";
import Login from "../login";
import {gapi} from 'gapi-script'
import Logout from "../Logout";
// import Logo from "../../assets/ZuieeLogo.svg";

const propTypes = {
	navPosition: PropTypes.string,
	hideNav: PropTypes.bool,
	hideSignin: PropTypes.bool,
	bottomOuterDivider: PropTypes.bool,
	bottomDivider: PropTypes.bool,
};

const defaultProps = {
	navPosition: "",
	hideNav: false,
	hideSignin: false,
	bottomOuterDivider: false,
	bottomDivider: false,
};
const clientId = "266472049487-7vsuprhinvbqa2iubr5i3164tckkt3er.apps.googleusercontent.com"
const Header = ({
	className,
	navPosition,
	hideNav,
	hideSignin,
	bottomOuterDivider,
	bottomDivider,
	btnText,
	link,
	...props
}) => {
	const [isActive, setIsactive] = useState(false);

	const nav = useRef(null);
	const hamburger = useRef(null);

	useEffect(() => {
		isActive && openMenu();
		document.addEventListener("keydown", keyPress);
		document.addEventListener("click", clickOutside);
		return () => {
			document.removeEventListener("keydown", keyPress);
			document.removeEventListener("click", clickOutside);
			closeMenu();
		};
	});
	useEffect(() => {
		function start(){
			gapi.client.init({
				clientId:clientId,
				scope:""
			})
		};
		gapi.load('client:auth2',start)
	   });
	const openMenu = () => {
		document.body.classList.add("off-nav-is-active");
		nav.current.style.maxHeight = nav.current.scrollHeight + "px";
		setIsactive(true);
	};

	const closeMenu = () => {
		document.body.classList.remove("off-nav-is-active");
		nav.current && (nav.current.style.maxHeight = null);
		setIsactive(false);
		fetch("/login").then(
			res => res.json()
		).catch(
			error => console.log(error)
			
		)
	};

	const keyPress = e => {
		isActive && e.keyCode === 27 && closeMenu();
	};

	const clickOutside = e => {
		if (!nav.current) return;
		if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
		closeMenu();
	};

	const classes = classNames("site-header", bottomOuterDivider && "has-bottom-divider", className);

	return (
		<header {...props} className={classes}>
			<div className="container">
				<div className={classNames("site-header-inner", bottomDivider && "has-bottom-divider")}>
					<Logo />
					{!hideNav && (
						<>
							<button ref={hamburger} className="header-nav-toggle" onClick={isActive ? closeMenu : openMenu}>
								<span className="screen-reader">Menu</span>
								<span className="hamburger">
									<span className="hamburger-inner"></span>
								</span>
							</button>
							<nav ref={nav} className={classNames("header-nav", isActive && "is-active")}>
								<div className="header-nav-inner">
									<ul
										className={classNames("list-reset text-xs", navPosition && `header-nav-${navPosition}`)}
									>
										<li>
											<Link to="#0" onClick={closeMenu}>
												Documentation
											</Link>
										</li>
									</ul>
									{!hideSignin && (
										<ul className="list-reset header-nav-right">
											<li>
												<Link
													to={link}
													
													onClick={closeMenu}
												>
												{btnText=='Login'?<Login/>:<Logout/>}
												</Link>
											</li>
										</ul>
									)}
								</div>
							</nav>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
