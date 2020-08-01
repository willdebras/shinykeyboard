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
  inputId = ".id",
  color_palette = "sharla1",
  selected = NULL
) {

  accent_color = colorlist[[color_palette]][["accent_color"]]
  keyboard_color = colorlist[[color_palette]][["keyboard_color"]]
  modifier_color = colorlist[[color_palette]][["modifier_color"]]
  alphanum_color = colorlist[[color_palette]][["alphanum_color"]]
  accent_color = colorlist[[color_palette]][["accent_color"]]
  background_color = colorlist[[color_palette]][["background_colour"]]
  alphanum_stroke = colorlist[[color_palette]][["alphanum_stroke"]]
  modifier_stroke = colorlist[[color_palette]][["modifier_stroke"]]
  accent_stroke = colorlist[[color_palette]][["accent_stroke"]]
  text_color = colorlist[[color_palette]][["text_color"]]

  keyboard_options <- list(
    tags$input(id=paste0(inputId, "_switch"),
               class="toggle-button",
               type="checkbox"),
    html = HTML(glue::glue(keyboard_string))
    )

  htmltools::tagList(
    htmltools::htmlDependency(
      name    = "shinykeyboard",
      version = utils::packageVersion("shinykeyboard"),
      package = "shinykeyboard",
      src     = "js",
      script  = "shinykeyboard.js",
      stylesheet = "styles.css"
    ),
    tags$div(
      # change this to use our css
      class = "shinykeyboard",
      id = inputId,
      `data-input-id` = inputId,
      keyboard_options
    )
  )

}
