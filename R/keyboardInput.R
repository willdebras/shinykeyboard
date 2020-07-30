#' @title An SVG Keyboard
#'
#' This input operates like a \code{shiny::radioButtons()} where you can select one of the body parts!
#'
#' @import shiny
#'
#' @param color_palette
#' @param selected
#'
#' @return
#'
#' @export
#'
#' @examples
#' \dontrun{
#' keyboardInput("human", data = rnorm(13, 100), low.col = "pink", high.col = "purple")
#' }
#' \dontrun{
#' keyboardInput("human", color = "steelblue")
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
