#' @title An SVG Keyboard
#'
#' This input operates like a \code{shiny::radioButtons()} where you can select keys to depress to simulate typing!
#'
#' @import shiny
#'
#' @param id Shiny input id
#' @param color_palette the color palette to use options include:
#' @param selected the keys selected by default
#'
#' @return
#'
#' @export
#'
#' @examples
#' \dontrun{
#' keyboardInput("keebs", color_palette = "sharla1")
#' }

keyboardInput <- function(
  color_palette = sharla1,
  selected = NULL
) {

  keyboard_options <- list( html = HTML(glue::glue(keyboard_string)))

  htmltools::tagList(
    htmltools::htmlDependency(
      name    = "shinyBody",
      version = utils::packageVersion("shinyBody"),
      package = "shinyBody",
      src     = "js",
      script  = "shinyBody.js",
      stylesheet = "styles.css"
    ),
    tags$div(
      # change this to use our css
      class = "human-body",
      id = inputId,
      `data-input-id` = inputId,
      ...,
      keyboard_options
    )
  )

}
