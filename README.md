# PaperlessApp

The Paperless app for convert currency(NIS to USD for now)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code 

1. app.component - The main page where all the components of the project are set
2. components -

   2.1. charts - currency-chart -
   
      a. currency-chart.component - Graph implementation for showing the converter rates graph by day of month

    2.2. converter-page  -
   
      a. converter-page.component - Table implementation for showing the converter rates by day of month 

   2.3. currency-form -
   
      a. currency-form.component - The form for submit the date (yyMM format) to the server
4. model - currency.input - input date for sending the data to server
5. services -
   
   a. data.service - sharing data between components
   
   b. paperless.service - service for getting the data from server using Observable      
