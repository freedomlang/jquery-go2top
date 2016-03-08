#### Easy Peasy
Download the minified version of the plugin, include it after jQuery and:
```
<script type="text/javascript">
$(document).ready(function(){
    $.goup();
});
</script>
```

### Options

| Name            	| Description                                                                                    | Type    | Default        |
|-------------------|------------------------------------------------------------------------------------------------|---------|----------------|
| `location`        | On which side the button will be shown ("left" or "right")                                     | String  | right          |
| `locationOffset`  | How many pixel the button is distant from the edge of the screen, based on the location setted | Integer | 20             |
| `bottomOffset`    | How many pixel the button is distant from the bottom edge of the screen                        | Integer | 10             |
| `containerSize` 	| The width and height of the button (minimum is 20)                                     		 | Integer | 40             |
| `containerRadius` | Let you transform a square in a circle (yeah, it's magic!)                                     | Integer | 10             |
| `containerClass`  | The class name given to the button container                                                   | String  | goup-container |
| `bcolor`  | The color of the image before you put your mouse on it (in hex format)                                                   	 | String  | #000 			|
| `acolor`  | The color of the image when you put your mouse on it (in hex format)                                                   	 | String  | #000 			|
| `trigger`         | After how many scrolled down pixels the button must be shown (bypassed by `alwaysVisible`)     | Integer | 500            |
| `entryAnimation`  | The animation of the show and hide events of the button ("slide" or "fade")				     | String  | fade           |
| `alwaysVisible`   | Set to true if u want the button to be always visible (bypass `trigger`)                       | Boolean | false          |
| `goupSpeed`		| The speed at which the user will be brought back to the top ("slow", "normal" or "fast")       | String  | slow           |
| `hideUnderWidth`  | The threshold of window width under which the button is permanently hidden                     | Integer | 500            |

### Changelog
#### v0.1.0 (03-04-2016)
* Initial Release

### License and Copyright
jQuery Go2top! is dual licensed under the [GPL](http://www.gnu.org/licenses/gpl.html) and [MIT](http://www.opensource.org/licenses/mit-license.php) licenses.

(c) 2016 freedomlang

Original code kindly created by [Daniele Lenares](https://github.com/Ryuk87)