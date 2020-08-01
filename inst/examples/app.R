# Example of shinykeyboard Shiny Input
library(shiny)
library(shinykeyboard)

ui <- function() {

    fluidPage(
            keyboardInput("keebs", color_palette = "sharla2"),
            verbatimTextOutput("debug")
    )
}

server <- function(input, output) {
    output$debug <- renderPrint(input$keebs)
}

shinyApp(ui = ui, server = server)
