interface IPlayerState {
  ENDED: 0
  PLAYING: 1,
  PlayerState: 2,
  BUFFERING: 3,
  CUED: 5
}

/**
 * YouTube player in your application and also defines the parameters that are available in the YouTube embedded player.
 * 
 * All of the following parameters are optional.
 */
interface IPlayerParameter {
  /**
   * This parameter specifies whether the initial video will automatically start to play when the player loads. Supported values are 0 or 1. 
   * The default value is 0.
   *
   * If you enable Autoplay, playback will occur without any user interaction with the player; 
   * playback data collection and sharing will therefore occur upon page load.
   */
  autoplay?: 0 | 1;
  /**
   * This parameter specifies the default language that the player will use to display captions. 
   * Set the parameter's value to an  [ISO 639-1 two-letter language code](http://www.loc.gov/standards/iso639-2/php/code_list.php).
   * 
   * If you use this parameter and also set the [cc_load_policy](https://developers.google.com/youtube/player_parameters#cc_load_policy) parameter to 1, 
   * then the player will show captions in the specified language when the player loads. 
   * If you do not also set the [cc_load_policy](https://developers.google.com/youtube/player_parameters#cc_load_policy) parameter, 
   * then captions will not display by default, but will display in the specified language if the user opts to turn captions on.
   */
  cc_lang_pref?: string | 1;
  /**
   * This parameter specifies the color that will be used in the player's video progress bar to highlight the amount of the video that the viewer has already seen.
   * Valid parameter values are red and white, and, by default, the player uses the color red in the video progress bar. 
   * See the YouTube API blog for more information about color options.
   * 
   * Note: Setting the color parameter to **white** will disable the [modestbranding](https://developers.google.com/youtube/player_parameters#modestbranding) option.
   */
  color?: 'red' | 'white';
  /**
   * This parameter indicates whether the video player controls are displayed:
   * 
   * controls=0 – Player controls do not display in the player.
   * 
   * controls=1 (default) – Player controls display in the player.
   */
  controls?: 0 | 1;
  /**
   * Setting the parameter's value to 1 causes the player to not respond to keyboard controls.
   * The default value is 0, which means that keyboard controls are enabled. 
   * Currently supported keyboard controls are:
   * 
   * Spacebar or [k]: Play / Pause
   * 
   * Arrow Left: Jump back 5 seconds in the current video
   * 
   * Arrow Right: Jump ahead 5 seconds in the current video
   * 
   * Arrow Up: Volume up
   * 
   * Arrow Down: Volume Down
   * 
   * [f]: Toggle full-screen display
   * 
   * [j]: Jump back 10 seconds in the current video
   * 
   * [l]: Jump ahead 10 seconds in the current video
   * 
   * [m]: Mute or unmute the video
   * 
   * [0-9]: Jump to a point in the video. 0 jumps to the beginning of the video, 
   *        1 jumps to the point 10% into the video, 2 jumps to the point 20% into the video, and so forth.
   */
  disablekb?: 0 | 1;
  /**
   * Setting the parameter's value to 1 enables the player to be controlled via [IFrame](https://developers.google.com/youtube/iframe_api_reference) Player API calls.
   * The default value is 0, which means that the player cannot be controlled using that API.
   * 
   * For more information on the IFrame API and how to use it, see the (IFrame API documentation)[https://developers.google.com/youtube/iframe_api_reference].
   */
  enablejsapi?: 0 | 1;
  /**
   * This parameter specifies the time, measured in seconds from the start of the video, 
   * when the player should stop playing the video. The parameter value is a positive integer.
   * 
   * Note that the time is measured from the beginning of the video and not from either the value of the **start** player parameter or the **startSeconds** parameter, 
   * which is used in YouTube Player API functions for loading or queueing a video.
   */
  end?: number;
  /**
   * Setting this parameter to **0** prevents the fullscreen button from displaying in the player.
   * The default value is **1**, which causes the fullscreen button to display.
   */
  fs?: 0 | 1;
  /**
   * Sets the player's interface language. 
   * The parameter value is an [ISO 639-1 two-letter language code](http://www.loc.gov/standards/iso639-2/php/code_list.php) or a fully specified locale. 
   * For example, fr and fr-ca are both valid values. 
   * Other language input codes, such as IETF language tags (BCP 47) might also be handled properly.
   * 
   * The interface language is used for tooltips in the player and also affects the default caption track. 
   * Note that YouTube might select a different caption track language for a particular user based on the user's individual language preferences and the availability of caption tracks.
   */
  hl?: string;
  /**
   * Setting the parameter's value to **1** causes video annotations to be shown by default, whereas setting to **3** causes video annotations to not be shown by default. 
   * The default value is **1**.
   */
  iv_load_policy?: 1 | 3;
  /**
   * The list parameter, in conjunction with the listType parameter, identifies the content that will load in the player.
   * 
   * If the listType parameter value is user_uploads, 
   * then the list parameter value identifies the YouTube channel whose uploaded videos will be loaded.
   * 
   * If the listType parameter value is playlist, then the list parameter value specifies a YouTube playlist ID. 
   * In the parameter value, you need to prepend the playlist ID with the letters PL as shown in the example below.
   * 
   * https://www.youtube.com/embed?listType=playlist&list=PLC77007E23FF423C6
   * 
   * Note: If you specify values for the list and listType parameters, the IFrame embed URL does not need to specify a video ID.
   */
  list?: string;
  /**
   * The listType parameter, in conjunction with the list parameter, identifies the content that will load in the player.
   * Valid parameter values are playlist and user_uploads.
   * 
   * If you specify values for the list and listType parameters, the IFrame embed URL does not need to specify a video ID.
   */
  listType?: 'user_uploads' | 'playlist';
  /**
   * In the case of a single video player, a setting of 1 causes the player to play the initial video again and again. 
   * In the case of a playlist player (or custom player), the player plays the entire playlist and then starts again at the first video.
   * 
   * Supported values are 0 and 1, and the default value is 0.
   * 
   * Note: This parameter has limited support in IFrame embeds. 
   * To loop a single video, set the loop parameter value to 1 and set the playlist parameter value to the same video ID already specified in the Player API URL:
   * https://www.youtube.com/embed/VIDEO_ID?playlist=VIDEO_ID&loop=1
   */
  loop?: 0 | 1;
  /**
   * This parameter lets you use a YouTube player that does not show a YouTube logo.
   * Set the parameter value to 1 to prevent the YouTube logo from displaying in the control bar.
   * Note that a small YouTube text label will still display in the upper-right corner of a paused video
   * when the user's mouse pointer hovers over the player.
   */
  modestbranding?: 1;
  /**
   * This parameter provides an extra security measure for the IFrame API and is only supported for IFrame embeds.
   * If you are using the IFrame API, which means you are setting the [enablejsapi](https://developers.google.com/youtube/player_parameters#enablejsapi) parameter value to 1,
   * you should always specify your domain as the **origin** parameter value.
   */
  origin?: string;
  /**
   * This parameter specifies a comma-separated list of video IDs to play.
   * If you specify a value, the first video that plays will be the **VIDEO_ID** specified in the URL path, 
   * and the videos specified in the **playlist** parameter will play thereafter.
   */
  playlist?: string;
  /**
   * Prior to the change, this parameter indicates whether the player should show related videos when playback of the initial video ends.
   * 
   * If the parameter's value is set to **1**, which is the default value, then the player does show related videos.
   * 
   * If the parameter's value is set to **0**, then the player does not show related videos.
   * 
   * After the change, you will not be able to disable related videos.
   * Instead, if the **rel** parameter is set to 0, related videos will come from the same channel as the video that was just played.
   */
  rel?: 0 | 1;
  /**
   * This parameter causes the player to begin playing the video at the given number of seconds from the start of the video.
   * The parameter value is a positive integer.
   * Note that similar to the seekTo function, the player will look for the closest keyframe to the time you specify.
   * This means that sometimes the play head may [seek](https://developers.google.com/youtube/js_api_reference#seekTo) to just before the requested time, usually no more than around two seconds.
   */
  start?: number;
  /**
   * This parameter identifies the URL where the player is embedded. 
   * This value is used in YouTube Analytics reporting when the YouTube player is embedded in a widget, 
   * and that widget is then embedded in a web page or application. In that scenario, 
   * the origin parameter identifies the widget provider's domain,
   * but YouTube Analytics should not identify the widget provider as the actual traffic source. 
   * Instead, YouTube Analytics uses the widget_referrer parameter value to identify the domain associated with the traffic source.
   */
  widget_referrer?: string;
}

/**
 * The API fires events to notify your application of changes to the embedded player. 
 * As noted in the previous section, you can subscribe to events by adding an event listener 
 * when constructing the YT.Player object, and you can also use the addEventListener function.
 */
interface IPlayerEvents {
  /**
   * This event fires whenever a player has finished loading and is ready to begin receiving API calls.
   * Your application should implement this function if you want to automatically execute certain operations, 
   * such as playing the video or displaying information about the video, as soon as the player is ready.
   */
  onReady?: (evt: Event) => void;
  /**
   * This event fires whenever the player's state changes.
   * The data property of the event object that the API passes to your event listener function will specify an integer that corresponds to the new player state.
   * Possible values are: **-1 (unstarted)**, **0 (ended)**, **1 (playing)**, **2 (paused)**, **3 (buffering)**, **5 (video cued)**.
   * 
   * When the player first loads a video, it will broadcast an unstarted (-1) event.
   * When a video is cued and ready to play, the player will broadcast a video cued (5) event.
   * In your code, you can specify the integer values or you can use one of the following namespaced variables: 
   * **YT.PlayerState.ENDED**, **YT.PlayerState.PLAYING**, **YT.PlayerState.PAUSED**, **YT.PlayerState.BUFFERING**, **YT.PlayerState.CUED**
   */
  onStateChange?: (evt: Event) => void;
  /**
   * This event fires whenever the video playback quality changes.
   * It might signal a change in the viewer's playback environment.
   * See the YouTube Help Center for more information about factors that affect playback conditions or that might cause the event to fire.
   * 
   * The data property value of the event object that the API passes to the event listener function will be a string that identifies the new playback quality.
   * Possible values are: **small**, **medium**, **large**, **hd720**, **hd1080**, **highres**
   */
  onPlaybackQualityChange?: (evt: Event) => void;
  /**
   * This event fires whenever the video playback rate changes.
   * For example, if you call the setPlaybackRate(suggestedRate) function, this event will fire if the playback rate actually changes.
   * Your application should respond to the event and should not assume that the playback rate will automatically change when the setPlaybackRate(suggestedRate) function is called.
   * Similarly, your code should not assume that the video playback rate will only change as a result of an explicit call to setPlaybackRate.
   * 
   * The data property value of the event object that the API passes to the event listener function will be a number that identifies the new playback rate.
   * The getAvailablePlaybackRates method returns a list of the valid playback rates for the currently cued or playing video.
   */
  onPlaybackRateChange?: (evt: Event) => void;
  /**
   * This event fires if an error occurs in the player.
   * The API will pass an event object to the event listener function.
   * That object's data property will specify an integer that identifies the type of error that occurred. Possible values are:
   * 
   * 2 – The request contains an invalid parameter value.
   * For example, this error occurs if you specify a video ID that does not have 11 characters,
   * or if the video ID contains invalid characters, such as exclamation points or asterisks.
   * 
   * 5 – The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.
   * 
   * 100 – The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.
   * 
   * 101 – The owner of the requested video does not allow it to be played in embedded players.
   * 
   * 150 – This error is the same as 101. It's just a 101 error in disguise!
   */
  onError?: (evt: Event) => void;
  /**
   * This event is fired to indicate that the player has loaded (or unloaded) a module with exposed API methods.
   * Your application can listen for this event and then poll the player to determine which options are exposed for the recently loaded module.
   * Your application can then retrieve or update the existing settings for those options.
   */
  onApiChange?: (evt: Event) => void;
}

export interface IYTPlayerConfig {
  height?: string;
  width?: string;
  videoId?: string;
  playerVars?: IPlayerParameter;
  events?: IPlayerEvents
}

interface IYTPlayer {
  /**
   * 
   * Adds a listener function for the specified event. 
   * The Events section below identifies the different events that the player might fire. 
   * The listener is a string that specifies the function that will execute when the specified event fires.
   * 
   * @param event 
   * @param listener 
   */
  addEventListener(event: string, listener: string): void;
  /**
   * Removes a listener function for the specified event. 
   * The listener is a string that identifies the function that will no longer execute when the specified event fires.
   * 
   * @param event 
   * @param listener 
   */
  removeEventListener(event: string, listener: string): void;
  /**
   * Plays the currently cued/loaded video. 
   * The final player state after this function executes will be playing (1).
   * 
   * Note: A playback only counts toward a video's official view count if it is initiated via a native play button in the player.
   */
  playVideo(): void;
  /**
   * Pauses the currently playing video.
   * The final player state after this function executes will be paused (2) unless the player is in the ended (0) state when the function is called,
   * in which case the player state will not change.
   */
  pauseVideo(): void;
  /**
   * Stops and cancels loading of the current video. 
   * This function should be reserved for rare situations 
   * when you know that the user will not be watching additional video in the player.
   * If your intent is to pause the video, you should just call the pauseVideo function.
   * If you want to change the video that the player is playing,
   * you can call one of the queueing functions without calling stopVideo first.
   * 
   * **Important**: Unlike the pauseVideo function, which leaves the player in the paused (2) state,
   * the stopVideo function could put the player into any not-playing state,
   * including ended (0), paused (2), video cued (5) or unstarted (-1).
   */
  stopVideo(): void;
  /**
   * Seeks to a specified time in the video. 
   * If the player is paused when the function is called, 
   * it will remain paused. If the function is called from another state (playing, video cued, etc.), 
   * the player will play the video.
   * 
   * @param seconds The seconds parameter identifies the time to which the player should advance.
   * 
   * The player will advance to the closest keyframe before that time unless 
   * the player has already downloaded the portion of the video to which the user is seeking.
   * 
   * @param allowSeekAhead The allowSeekAhead parameter determines whether the player will make a new request to the server
   * if the seconds parameter specifies a time outside of the currently buffered video data.
   * 
   * We recommend that you set this parameter to false while the user drags the mouse along 
   * a video progress bar and then set it to true when the user releases the mouse.
   * This approach lets a user scroll to different points of a video 
   * without requesting new video streams by scrolling past unbuffered points in the video. 
   * When the user releases the mouse button, the player advances to the desired point in the video and requests a new video stream if necessary.
   */
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  /**
   * Mutes the player.
   */
  mute(): void;
  /**
   * Unmutes the player.
   */
  unMute(): void;
  /**
   * Returns **true** if the player is muted, **false** if not.
   */
  isMuted(): boolean;
  /**
   * Returns the duration in seconds of the currently playing video.
   * Note that getDuration() will return 0 until the video's metadata is loaded, which normally happens just after the video starts playing.
   * 
   * If the currently playing video is a live event, the getDuration() function will return the elapsed time since the live video stream began. 
   * Specifically, this is the amount of time that the video has streamed without being reset or interrupted. 
   * In addition, this duration is commonly longer than the actual event time since streaming may begin before the event's start time.
   */
  getDuration(): number;
  /**
   * Sets the volume. Accepts an integer between 0 and 100.
   * 
   * @param volume accepts an integer between 0 and 100.
   */
  setVolume(volume: number): void;
  /**
   * Returns the player's current volume, an integer between 0 and 100. Note that getVolume() will return the volume even if the player is muted.
   */
  getVolume(): number;
  /**
   * This method returns the DOM node for the embedded <iframe>.
   */
  getIframe(): object;
  /**
   * Removes the <iframe> containing the player.
   */
  destroy(): void;
  /**
   * Returns a number between 0 and 1 that specifies the percentage of the video that the player shows as buffered. 
   * This method returns a more reliable number than the now-deprecated getVideoBytesLoaded and getVideoBytesTotal methods.
   */
  getVideoLoadedFraction(): number;
  /**
   * Returns the state of the player. Possible values are:
   * 
   * * -1 – unstarted
   * 
   * * 0 – ended
   * 
   * * 1 – playing
   * 
   * * 2 – paused
   * 
   * * 3 – buffering
   * 
   * * 5 – video cued
   */
  getPlayerState(): number
  /**
   * Returns the elapsed time in seconds since the video started playing.
   */
  getCurrentTime(): number
  /**
   * This method returns the DOM node for the embedded <iframe>.
   */
  getIframe(): HTMLIFrameElement
}

interface YTPlayerConstructor {
  new(elementId: string, confing?: IYTPlayerConfig): IYTPlayer;
}

interface IYT {
  Player?: YTPlayerConstructor;
  PlayerState?: IPlayerState;
}

declare const YT: Readonly<IYT> | undefined;

type HandlerPayloadType = { callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean }

class EventTargetEmitter extends EventTarget {
  _actionDict: { [type: string]: Array<HandlerPayloadType> } = {}

  emit(type: string) {
    this.dispatchEvent(new Event(type));
  }

  addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) {
    let payload: HandlerPayloadType = { callback: callback }
    if (options !== undefined) {
      payload.options = options;
    }

    if (!this._actionDict[type]) {
      this._actionDict[type] = []
    }

    this._actionDict[type].push(payload)
    super.addEventListener(type, callback, options);
  }

  removeAllListeners(type: string) {
    this._actionDict[type]?.map(item => {
      if (item.options) {
        this.removeEventListener(type, item.callback, item.options);
      } else {
        this.removeEventListener(type, item.callback);
      }
    })
  }
}

const eventEmiiter = new EventTargetEmitter();
let youTubeIframeAPIRead = false;

// The function named onYouTubeIframeAPIReady is used in yt player
// eslint-disable-next-line
function onYouTubeIframeAPIReady() {
  youTubeIframeAPIRead = true;
  eventEmiiter.emit('ready')
  eventEmiiter.removeAllListeners('ready');
}

if (typeof (YT) === 'undefined') {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  if (!firstScriptTag) {
    document.body.appendChild(tag);
  } else {
    firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);
  }
}

export function addLazyLoad(action: () => void) {
  if (youTubeIframeAPIRead) {
    action();
  } else {
    eventEmiiter.addEventListener('ready', action);
  }
}

export function removeLazyLoad(action: () => void) {
  eventEmiiter.removeEventListener('ready', action);
}

export type { IYTPlayer };
export default YT as Readonly<IYT>;