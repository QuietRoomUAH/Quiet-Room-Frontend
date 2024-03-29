import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MechButton from '@/components/MechButton'
import { Avatar, Button, Container, IconButton, Stack, Typography } from '@mui/material'
import Layout from '@/components'
import { Grid } from '@mui/material'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>UAH QuietRoom</title>
      </Head>
      <Layout>
        <div style={{minHeight: '83vh'}}>
          <Container sx={{display: 'flex', width: '100vw', height: '80vh', justifyContent: 'center', alignItems: 'center'}}>
            <Grid
              container
              direction={'row'}
              justifyContent={'space-evenly'}
              alignItems={'center'}
              columns={{ xs: 2, sm: 6, md: 8 }}
              spacing={3}
            >
              <Grid item className={styles.logoCenter} xs={4}>
                <img
                  src={'logo-light.png'}
                  className={styles.logoStyle}
                  alt={'Logo-Light'}
                  style={{ minWidth: '340px' }}
                />
              </Grid>
              <Grid item xs={4}>
                <Grid
                  container
                  direction={'column'}
                  columns={{ xs: 3 }}
                  rowGap={5}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    minWidth: '340px',
                  }}
                >
                  <Grid item xs={3} width={'100%'}>
                    <MechButton
                      href={'/availablerooms'}
                      text={'Find Available Rooms'}
                      width={'100%'}
                      height={'auto'}
                      fontSize={'3.5vh'}
                    />
                  </Grid>
                  <Grid item xs={3} width={'100%'}>
                    <MechButton
                      href={'/roominfo'}
                      text={'Find Room Info'}
                      width={'100%'}
                      height={'auto'}
                      fontSize={'3.5vh'}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>

          <Container
            sx={{
              paddingBottom: '3vh',
            }}
          >
            <Typography variant="h3" style={{ textAlign: 'center' }}>
              About
            </Typography>
          </Container>

          <Container
            sx={{
              paddingBottom: '10vh',
            }}
          >
            <Typography variant="h6">
              Sometimes you need a change of environment from the Charger Union,
              your group project needs a place to meet, or you just hate the windowless study rooms in the
              library. We created <strong>Quiet Room</strong> to help you find the perfect spot on campus
              to get whatever you need done. Find out what rooms are available to use during the time that
              you need it on the{' '}
              <Button variant="outlined" style={{borderRadius: '15px'}}>
                <Link href={'/availablerooms'} style={{ textDecoration: 'none' }}>
                  Find Available Rooms
                </Link>
              </Button>{' '}
              page. Want to see a little more info about the room? Check out the{' '}
              <Button variant="outlined" style={{borderRadius: '15px'}}>
                <Link href={'/roominfo'} style={{ textDecoration: 'none' }}>
                  Find Room Info
                </Link>
              </Button>{' '}
              page to get all the details you might need - the type of room, capacity, and more. You can also see a
              week-view of a room's schedule for a better idea of when that room will be available.
            </Typography>
            <br></br>
            <Typography variant="h6">
              We hope this helps you find the quiet room you need to get whatever you're working on done! We would love
              to hear your feedback, so make sure to contact one of us or fill out our{' '}
              <Button variant="outlined" style={{borderRadius: '15px'}}>
                <Link href={'https://forms.gle/PamUMtey2cBjPAnD6'} scroll={false} style={{ textDecoration: 'none' }}>
                  Suggestion Form
                </Link>
              </Button>{' '}
              with your input on how to make this site better for fellow UAH'ers.
            </Typography>
            <br></br>
            <Typography variant="h6">Happy studying, and Go Chargers!</Typography>
          </Container>

          <Container
            sx={{
              paddingBottom: '3vh',
            }}
          >
            <Typography variant="h3" style={{ textAlign: 'center' }}>
              Developers
            </Typography>
          </Container>

          <Container
            sx={{
              paddingBottom: '10vh',
            }}
          >
            <Grid container columns={{ xs: 6, md: 12 }} spacing={12} justifyContent={'space-around'}>
              <Grid container item xs={12} sm={6} spacing={2} justifyContent={'center'} alignItems={'center'}>
                <Grid item>
                  <Avatar
                    alt="Bernard Allotey"
                    src="bernard-pfp.jpeg"
                    sx={{ width: 250, height: 250, float: 'left' }}
                  />
                </Grid>
                <Grid item>
                  <Stack sx={{ textAlign: 'center' }}>
                    <Typography variant="h4">Bernard Allotey</Typography>
                    <Typography variant="h6">UAH '23 Computer Science</Typography>
                    <Typography variant="h6">Backend</Typography>
                    <br></br>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                      <IconButton>
                        <Link href="https://github.com/balloman">
                          <img src="github-icon.svg" height="30px" alt="Github" />
                        </Link>
                      </IconButton>
                      <IconButton>
                        <Link href="https://www.linkedin.com/in/bernard-a-842555106/">
                          <img src="linkedin-icon.svg" height="30px" alt="Linkedin" />
                        </Link>
                      </IconButton>
                      <IconButton>
                        <Link href="https://bernardallotey.com/">
                          <img src="globe-solid.svg" height="30px" alt="Site" />
                        </Link>
                      </IconButton>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>

              <Grid container item xs={12} sm={6} spacing={2} justifyContent={'center'} alignItems={'center'}>
                <Grid item>
                  <Avatar
                    alt="Salwa Jeries"
                    src="salwa-pfp.JPG"
                    sx={{ width: 250, height: 250, float: 'left' }}
                  />
                </Grid>
                <Grid item>
                  <Stack sx={{ textAlign: 'center' }}>
                    <Typography variant="h4">Salwa Jeries</Typography>
                    <Typography variant="h6">UAH '25 Computer Science</Typography>
                    <Typography variant="h6">Frontend/Design</Typography>
                    <br></br>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                      <IconButton>
                        <Link href="https://github.com/salsajeries">
                          <img src="github-icon.svg" height="30px" alt="Github" />
                        </Link>
                      </IconButton>
                      <IconButton>
                        <Link href="https://www.linkedin.com/in/salwa-jeries-17a146226/">
                          <img src="linkedin-icon.svg" height="30px" alt="Linkedin" />
                        </Link>
                      </IconButton>
                      <IconButton>
                        <Link href="https://www.salwajeries.com">
                          <img src="globe-solid.svg" height="30px" alt="Site" />
                        </Link>
                      </IconButton>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Footer></Footer>
      </Layout>
    </>
  )
}
