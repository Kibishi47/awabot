import { Container, Paper, Box, Typography, Stack, Grid } from '@mui/material'
import { Button } from './components/Button'
import { Logo } from './components/Logo'
import { TextField } from './components/TextField'
import { Badge } from './components/Badge'
import { BackButton } from './components/BackButton'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'accent-light', py: 8 }}>
      <Container maxWidth="md">
        <Paper elevation={0} sx={{ p: 6, borderRadius: 4, bgcolor: 'white', border: '1px solid', borderColor: 'divider' }}>
          <Stack spacing={6}>
            {/* Header with Logo */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Logo />
              <Badge label="Admin" />
            </Box>

            <BackButton label="Retour au dashboard" />

            <Typography variant="h4" sx={{ fontWeight: 700, color: 'accent-dark' }}>
              Design System Workshop
            </Typography>

            <Grid container spacing={4}>
              {/* Buttons Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'neutral-noir', mb: 3 }}>
                  Boutons
                </Typography>
                <Stack spacing={2}>
                  <Button designVariant="gradient">
                    Bouton Primaire (Gradient)
                  </Button>
                  <Button designVariant="secondary">
                    Bouton Secondaire
                  </Button>
                </Stack>
              </Grid>

              {/* Form Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'neutral-noir', mb: 3 }}>
                  Champs de saisie
                </Typography>
                <Stack spacing={3}>
                  <TextField label="Nom d'utilisateur" placeholder="Entrez votre nom" />
                  <TextField label="Email" type="email" placeholder="email@exemple.com" />
                </Stack>
              </Grid>
            </Grid>

            {/* Logo Variants */}
            <Box sx={{ pt: 4, mt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography variant="h6" gutterBottom sx={{ color: 'neutral-noir', mb: 3 }}>
                Variantes du Logo
              </Typography>
              <Stack direction="row" spacing={4} sx={{ p: 4, bgcolor: 'accent-dark', borderRadius: 2 }}>
                <Logo variant="light" />
                <Typography sx={{ color: 'white', opacity: 0.8, alignSelf: 'center' }}>
                  (Version claire sur fond sombre)
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}

export default App
