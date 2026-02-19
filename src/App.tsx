import { Button, Container, Typography, Paper, Box } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

function App() {
  return (
    <Container maxWidth="sm" className="mt-10">
      <Paper elevation={3} className="p-8 bg-blue-50">
        <Typography variant="h4" component="h1" gutterBottom className="text-center text-blue-800 font-bold">
          Projet React SPA
        </Typography>
        <Typography variant="body1" className="mb-4 text-gray-700 italic">
          Configuré avec Material UI et Tailwind CSS v4.
        </Typography>

        <Box className="flex flex-col gap-4">
          <Paper variant="outlined" className="p-4 border-2 border-blue-200">
            <Typography variant="h6" className="text-blue-600">
              Usage de Tailwind :
            </Typography>
            <div className="flex gap-2 mt-2">
              <div className="w-8 h-8 bg-red-500 rounded-full shadow-lg"></div>
              <div className="w-8 h-8 bg-green-500 rounded-lg shadow-md"></div>
              <div className="w-8 h-8 bg-purple-500 rotate-45 shadow-sm"></div>
            </div>
          </Paper>

          <Paper variant="outlined" className="p-4 border-2 border-teal-200">
            <Typography variant="h6" className="text-teal-600 mb-2">
              Usage de MUI :
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              className="hover:scale-105 transition-transform"
            >
              Bouton MUI avec Hover Tailwind
            </Button>
          </Paper>
        </Box>
      </Paper>
    </Container>
  )
}

export default App
