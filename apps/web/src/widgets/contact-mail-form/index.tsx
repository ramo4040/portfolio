interface ContactMailFormProps {
	fullName: string
	email: string
	message: string
}

export const ContactMailForm = ({
	fullName,
	email,
	message,
}: ContactMailFormProps) => {
	return (
		<html dir='ltr' lang='en'>
			<head>
				<meta name='viewport' content='width=device-width' />
				<meta content='text/html; charset=UTF-8' httpEquiv='Content-Type' />
				<meta name='x-apple-disable-message-reformatting' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='x-apple-disable-message-reformatting' />
				<meta
					name='format-detection'
					content='telephone=no,address=no,email=no,date=no,url=no'
				/>
				<meta name='color-scheme' content='light' />
				<meta name='supported-color-schemes' content='light' />
				<style>
					{`
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              mso-font-alt: 'sans-serif';
              src: url(https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.19) format('woff2');
            }

            * {
              font-family: 'Inter', sans-serif;
            }
          `}
				</style>
				<style>
					{`
            blockquote,h1,h2,h3,img,li,ol,p,ul{margin-top:0;margin-bottom:0}
            @media only screen and (max-width:425px){
              .tab-row-full{width:100%!important}
              .tab-col-full{display:block!important;width:100%!important}
              .tab-pad{padding:0!important}
            }
          `}
				</style>
			</head>
			<body
				style={{
					margin: '0px',
					backgroundColor: '#ffffff',
					paddingTop: '0px',
					paddingRight: '0px',
					paddingBottom: '0px',
					paddingLeft: '0px',
				}}
			>
				<table
					width='100%'
					border={0}
					cellPadding='0'
					cellSpacing='0'
					role='presentation'
					style={{
						maxWidth: '600px',
						width: '100%',
						borderStyle: 'solid',
						backgroundColor: '#ffffff',
						minWidth: '300px',
						paddingTop: '0.5rem',
						paddingRight: '0.5rem',
						paddingBottom: '0.5rem',
						paddingLeft: '0.5rem',
						borderRadius: '0px',
						borderWidth: '0px',
						borderColor: 'transparent',
					}}
				>
					<tbody>
						<tr style={{ width: '100%' }}>
							<td>
								<h2
									style={{
										marginLeft: '0px',
										marginRight: '0px',
										marginTop: '0px',
										marginBottom: '0px',
										textAlign: 'left',
										color: '#111827',
										fontSize: '30px',
										lineHeight: '36px',
										fontWeight: '700',
									}}
								>
									New Contact Form Submission
								</h2>
								<table
									align='center'
									width='100%'
									border={0}
									cellPadding='0'
									cellSpacing='0'
									role='presentation'
									style={{ maxWidth: '37.5em', height: '8px' }}
								>
									<tbody>
										<tr style={{ width: '100%' }}>
											<td />
										</tr>
									</tbody>
								</table>
								<table
									align='center'
									width='100%'
									border={0}
									cellPadding='0'
									cellSpacing='0'
									role='presentation'
									style={{
										marginTop: '8px',
										marginRight: '8px',
										marginBottom: '8px',
										marginLeft: '8px',
									}}
								>
									<tbody style={{ width: '100%' }}>
										<tr style={{ width: '100%' }}>
											<td
												align='left'
												data-id='__react-email-column'
												style={{
													borderColor: '#e2e2e2',
													borderWidth: '1px',
													borderStyle: 'solid',
													backgroundColor: '#f7f7f7',
													borderRadius: '6px',
													paddingTop: '8px',
													paddingRight: '8px',
													paddingBottom: '8px',
													paddingLeft: '8px',
												}}
											>
												<p
													style={{
														fontSize: '15px',
														lineHeight: '26.25px',
														marginBottom: '16px',
														marginTop: '16px',
														WebkitFontSmoothing: 'antialiased',
														MozOsxFontSmoothing: 'grayscale',
														color: '#374151',
														margin: '0 0 0px 0',
													}}
												>
													<strong>Full Name: </strong>
													{fullName}
													<br />
													<strong>Email: </strong>
													<a
														href={`mailto:${email}`}
														rel='noopener noreferrer nofollow'
														style={{
															color: '#111827',
															textDecorationLine: 'none',
															fontWeight: '500',
															textDecoration: 'none',
														}}
														target='_blank'
													>
														{email}
													</a>
													<br />
													<strong>Message: </strong>
													{message}
												</p>
											</td>
										</tr>
									</tbody>
								</table>
								<p
									style={{
										fontSize: '15px',
										lineHeight: '26.25px',
										marginBottom: '16px',
										marginTop: '16px',
										WebkitFontSmoothing: 'antialiased',
										MozOsxFontSmoothing: 'grayscale',
										color: '#374151',
										margin: '0 0 20px 0',
									}}
								>
									<span style={{ color: 'rgb(119, 119, 119)' }}>
										You received this message from your portfolio's contact
										form. Reply directly to the sender's email to respond.
									</span>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</body>
		</html>
	)
}
