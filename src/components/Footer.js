import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from '@mui/material';
import { Box, Container, Row, Column, FooterLink, Heading, } from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1 style={{
				color: "green",
				textAlign: "center",
				marginTop: "-50px"
			}}>
			</h1>
			<Container>
				<Row>
					<Column>
						<Heading>Useful Links</Heading>
						<FooterLink href="/blog">Blogs</FooterLink>
						<FooterLink href="/products">Products</FooterLink>
						<FooterLink href="/announcements">Announcements</FooterLink>
					</Column>
					<Column>
						<Heading>Contacts</Heading>
						<FooterLink href="/kochi">Kochi</FooterLink>
						<FooterLink href="/kottayam">Kottayam</FooterLink>
						<FooterLink href="/trivandrum">Trivandrum</FooterLink>
						
					</Column>
					<Column>
						<Heading>Policy</Heading>
						<FooterLink href="/privacy">Privacy</FooterLink>
						<FooterLink href="/return">Return</FooterLink>
						<FooterLink href="/terms">Terms Of Use</FooterLink>
					</Column>
					<Column><FontAwesomeIcon icon="fa-brands fa-youtube" />
						<Heading>Connect</Heading>
						<FooterLink href="/youtube">
						<Link
								component="button"
								variant="body2"
								onClick={() => {
									console.info("I'm a button.");
								}}
								>
								Youtube
							</Link>
						</FooterLink>
						<FooterLink href="/facebook">
							<Link
								component="button"
								variant="body2"
								onClick={() => {
									console.info("I'm a button.");
								}}
								>
								Facebook
							</Link>
						</FooterLink>
						<FooterLink href="/instagram">
							<Link
								component="button"
								variant="body2"
								onClick={() => {
									console.info("I'm a button.");
								}}
								>
								Instagram
							</Link>
						</FooterLink>
						 
					
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;