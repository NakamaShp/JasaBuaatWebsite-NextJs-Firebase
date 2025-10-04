'use client';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// 3party
import { motion } from 'framer-motion';

// @project
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import SvgIcon from '@/components/SvgIcon';
import { PAGE_PATH } from '@/path';

/***************************  SERVICE - HERO  ***************************/
const breadcrumbs = [{ title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' }, { title: 'Blog' }];

/***************************  SERVICE - DATA  ***************************/
const services = [
  {
    title: 'Pembuatan Website Bisnis',
    description:
      'Bangun website profesional yang merepresentasikan identitas brand Anda. Kami membantu UMKM hingga perusahaan menampilkan profil bisnis yang terpercaya.',
    icon: 'tabler-briefcase'
  },
  {
    title: 'Website E-Commerce',
    description:
      'Mulai jualan online dengan website toko yang cepat, aman, dan mudah digunakan. Terintegrasi dengan sistem pembayaran dan pengiriman otomatis.',
    icon: 'tabler-shopping-cart'
  },
  {
    title: 'Landing Page Campaign',
    description: 'Optimalkan konversi dengan landing page interaktif. Cocok untuk promosi produk, event, atau pengumpulan leads.',
    icon: 'tabler-rocket'
  },
  {
    title: 'Website Custom & CMS',
    description:
      'Kami menyediakan website custom menggunakan teknologi modern seperti Next.js dan Firebase, atau berbasis CMS seperti WordPress sesuai kebutuhan Anda.',
    icon: 'tabler-code'
  }
];

/***************************  PAGE - SERVICE  ***************************/
export default function Service() {
  return (
    <>
      {/* HERO SECTION */}
      <SectionHero
        heading={`Blog ${branding.brandName}`}
        caption="Solusi digital untuk bantu bisnis Anda tampil profesional dan terpercaya di dunia online."
        breadcrumbs={breadcrumbs}
      />

      {/* SERVICES SECTION */}

      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 6, md: 10 }, py: { xs: 6, md: 10 } }}>
          {/* GRID 2x2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
          >
            <Grid
              container
              spacing={4}
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: '1fr 1fr',
                  md: '1fr 1fr'
                },
                gap: 2
              }}
            >
              {services.map((service, index) => (
                <Box
                  key={index}
                  sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    boxShadow: 2,
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 }
                  }}
                >
                  <SvgIcon name={service.icon} size={40} color="primary.main" sx={{ mb: 2 }} />
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={3}>
                    {service.description}
                  </Typography>
                  <Button variant="outlined" href={PAGE_PATH.contactUs} sx={{ borderRadius: 2 }}>
                    Konsultasi Gratis
                  </Button>
                </Box>
              ))}
            </Grid>
          </motion.div>

          {/* CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                mt: { xs: 8, md: 10 },
                bgcolor: 'grey.100',
                py: { xs: 6, md: 8 },
                borderRadius: 6
              }}
            >
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Siap Memulai Proyek Website Anda?
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
                Kami bantu wujudkan website impian Anda dengan desain modern dan performa terbaik.
              </Typography>
              <Button variant="contained" color="primary" size="large" href={PAGE_PATH.contactUs} sx={{ borderRadius: 3 }}>
                Hubungi Kami
              </Button>
            </Box>
          </motion.div>
        </Stack>
      </ContainerWrapper>
    </>
  );
}
