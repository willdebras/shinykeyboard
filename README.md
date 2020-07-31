
# shinykeyboard

<!-- badges: start -->
<!-- badges: end -->

shinykeyboard is a shiny input binding that allows you to visualize what is being typed in real time

## Installation

You can install the released version of shinykeyboard from GitHub with:

``` r
remotes::install_github("willdebras/shinykeyboard")
```

## Example

``` r
library(shiny)
library(shinykeyboard)

ui <- function() {

    fluidPage(
            keyboardInput("keebs", color_palette = "sharla1"),
            verbatimTextOutput("debug")
    )
}

server <- function(input, output) {
    output$debug <- renderPrint(input$keebs)
}

shinyApp(ui = ui, server = server)
```
