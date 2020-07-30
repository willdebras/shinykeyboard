# Example of shinykeyboard Shiny Input
library(shiny)
library(shinykeyboard)

ui <- function() {

    fluidPage(
            keyboardInput("keebs",
                          color_pallete = "sharla1",
                          selected = c("A")),
            verbatimTextOutput("debug")
    )
}

server <- function(input, output) {
    output$debug <- renderPrint(input$keebs)
}

shinyApp(ui = ui, server = server)
