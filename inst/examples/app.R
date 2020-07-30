# Example of shinykeyboard Shiny Input
library(shiny)
library(shinykeyboard)

ui <- function() {

    fluidPage(
            keyboardInput("keebs1", color_palette = "sharla1"),
            keyboardInput("keebs2", color_palette = "sharla2"),
            keyboardInput("keebs3", color_palette = "sharla3"),
            #verbatimTextOutput("debug")
    )
}

server <- function(input, output) {
    #output$debug <- renderPrint(input$keebs)
}

shinyApp(ui = ui, server = server)
