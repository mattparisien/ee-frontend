import React, { useState, useEffect } from "react";
import $ from "jquery";
import { animateMenuIn, animateMenuOut, animateTopBarIn, animateTopBarOut } from "../animations";

export default function Header(props) {
	$(() => {
		function checkPosition() {

      //Initial load check
      if (window.matchMedia("(max-width: 767px)").matches) {
        animateTopBarIn();
        console.log("hi");
      } else {
        animateTopBarOut();
      }

      //Check on resize
			$(window).on("resize", function () {
				if (window.matchMedia("(max-width: 767px)").matches) {
					animateTopBarIn();
					console.log("hi");
				} else {
					animateTopBarOut();
				}
			});
		}
		checkPosition();
	});

	return (
		<header>
			<button className='header-burger' type='button' onClick={props.onClick}>
				<span class='top'></span>
				<span class='bottom'></span>
			</button>
			<nav>
				<ul>
					<li>
						<a href='home'>Home</a>
					</li>
					<li>
						<a href=''>Agency</a>
					</li>
					<li>
						<a href=''>Projects</a>
					</li>
					<li>
						<a href=''>Contact</a>
					</li>
				</ul>
			</nav>
			<div className='bg-dynamic -bg-dark'></div>
		</header>
	);
}
