#' <Add Title>
#'
#' <Add Description>
#' @param elementId input id
#' @param color_palette the color palette to use options include:
#' @param selected the keys selected by default
#'
#' @import htmlwidgets
#'
#' @export
#' @example play()
play <- function(message, width = NULL, height = NULL, elementId = NULL,
                 color_palette = "sharla1", selected = NULL) {

  # forward options using x
  x = list(
    message = message
  )

  # subset colors based on the user selected palette
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

  # apply the colors to the svg string
  # this outputs a radio button
  # and the svg keyboard
  keyboard_options <- list(
    htmltools::tags$input(id=paste0(elementId, "_switch"),
                          class="toggle-button",
                          type="checkbox"),
    html = htmltools::HTML(glue::glue(keyboard_string))
  )

  # this _should_ work and print the expected output
  # but it doesnt
  sprintf("<div>%s</div>", keyboard_options)

  # also tried here
  # but doesnt work
  # htmltools::div(
  #  keyboard_options
  # )

  # create widget
  htmlwidgets::createWidget(
    name = 'play',
    x,
    width = width,
    height = height,
    package = 'shinykeyboard',
    elementId = elementId
  )

}
