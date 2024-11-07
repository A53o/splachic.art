import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Strong, Section, Icon, Input, Button, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia, Formspree } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-5" background="--color-darkL2">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="flex-start"
				flex-direction="row"
				width="30%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Image src="https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z" display="block" width="36px" height="36px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--lead"
						sm-margin="0px 0 0px 0"
						display="block"
						color="--secondary"
					>
						Splachic Art
					</Text>
				</LinkBox>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="70%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="ai"
					icon={AiOutlineMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="flex-end"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
							<Image src="https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z" display="block" width="36px" height="36px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--lead"
								sm-margin="0px 0 0px 0"
								display="block"
								lg-font="--lead"
							>
								Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="12px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="--base"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override
							slot="item-active"
							border-width="0 0 2px 0"
							border-style="solid"
							border-color="--color-darkL2"
							lg-border-width="0 0 0 2px"
						/>
						<Override slot="item" padding="6px 6px 6px 6px" lg-padding="6px 12px 6px 12px" />
						<Override slot="link-active" cursor="default" color="--darkL2" hover-color="--darkL2" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Link
						font="--base"
						text-decoration-line="initial"
						margin="0px 0px 0px 16px"
						background="--color-secondary"
						border-radius="8px"
						href="#"
						color="--dark"
						padding="6px 12px 7px 12px"
						lg-margin="0px 0px 24px 0px"
						lg-padding="12px 18px 13px 18px"
						lg-font="--lead"
					>
						<Strong>
							Vist Shop
						</Strong>
					</Link>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="32px 0px 0px 0px"
					>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--grey" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="112px 0 0px 0" background="--color-darkL2" md-padding="96px 0 0px 0" sm-padding="72px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				margin="0px 0px 40px 0px"
				padding="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--light"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
					width="80%"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					sm-width="100%"
				>
					3 Easy To Forget Tricks About New App
				</Text>
				<Text
					margin="0px 0px 32px 0px"
					color="#FFFFFF"
					font="--lead"
					lg-text-align="center"
					text-align="center"
					width="60%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
				<Box
					min-width="100px"
					min-height="100px"
					max-width="60%"
					max-height="30%"
					flex-direction="row"
					align-self="center"
				>
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--dark"
						background="--color-secondary"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						sm-margin="0px 0px 0px 0px"
						sm-text-align="center"
						hover-transition="background-color 0.2s linear 0s"
						hover-background="--color-orange"
						transition="background-color 0.2s linear 0s"
						margin="0px 1rem 0px 0px"
					>
						About Me
					</Link>
					<Link
						href="store.splachic.art"
						padding="12px 24px 12px 24px"
						color="--dark"
						background="--color-primary"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 0px 0px 1rem"
						sm-margin="0px 0px 0px 0px"
						sm-text-align="center"
						hover-transition="background-color 0.2s linear 0s"
						hover-background="--color-orange"
						transition="background-color 0.2s linear 0s"
					>
						🛒 Vist Shop
					</Link>
				</Box>
			</Box>
		</Section>
		<Section background="url(https://uploads.quarkly.io/672bee6c9e74900024fe3dd9/images/wave-haikei%281%29.svg?v=2024-11-06T23:13:11.974Z) center/cover repeat-x scroll" height="400px">
			<Box
				min-width="100px"
				min-height="100px"
				text-align="center"
				align-self="center"
				display="flex"
				order="0"
				align-items="center"
				flex-direction="row"
				justify-content="center"
			>
				<Icon category="md" icon={MdKeyboardArrowDown} size="64px" color="#ffffff" />
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				width="50%"
				lg-width="100%"
				lg-display="flex"
				lg-justify-content="center"
				padding="0px 16px 0px 0px"
				lg-padding="0px 0px 0px 0px"
			>
				<Box
					display="grid"
					grid-template-rows="repeat(9, 60px)"
					grid-template-columns="repeat(2, 1fr)"
					grid-gap="16px"
					max-width="480px"
					lg-margin="0px 0px 16px 0px"
					sm-grid-template-rows="repeat(9, 10vw)"
				>
					<Image
						src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						width="100%"
						grid-row="1 / span 5"
						grid-column="1 / span 1"
						height="100%"
						srcSet="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Image
						src="https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						grid-column="2 / span 1"
						grid-row="2 / span 3"
						width="100%"
						height="100%"
						srcSet="https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Image
						src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						width="100%"
						grid-column="1 / span 1"
						grid-row="6 / span 3"
						height="100%"
						srcSet="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Image
						src="https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						width="100%"
						grid-column="2 / span 1"
						grid-row="5 / span 5"
						height="100%"
						srcSet="https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-align-items="center"
				sm-margin="20px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 0px 16px 16px"
				lg-width="100%"
				lg-padding="24px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					See the world & spend less always
				</Text>
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--lead" lg-text-align="center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
			background="none"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Second to none
			</Text>
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				margin="10px 0 0 0"
				color="--dark"
			>
				About Me
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0" color="--darkL1">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box>
						<Text
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							Contact
						</Text>
						<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
							Email us, we would love to hear form you
						</Text>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xeqpgrlv">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" type="text" />
								</Box>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button background="--color-accent" color="--dark">
										Send
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			background-color="--dark"
			text-align="center"
			padding="32px 0"
			quarkly-title="Footer-1"
			background="none"
		>
			<List
				margin="0px 0px 0px 0px"
				padding="12px 0px 12px 0px"
				list-style-type="none"
				as="ul"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<Link
					href="#"
					color="--darkL2"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					About
				</Link>
				<Link
					href="#"
					color="--darkL2"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Services
				</Link>
				<Link
					href="#"
					color="--darkL2"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Portfolio
				</Link>
				<Link
					href="#"
					color="--darkL2"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Blog
				</Link>
				<Link
					href="#"
					color="--darkL2"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Contacts
				</Link>
			</List>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--primary"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"672bee6c9e74900024fe3dd7"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});