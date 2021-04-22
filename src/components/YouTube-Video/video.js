export default function Video() {
    return(
        <div style={{position: "relative", paddingBottom: "56.25%" /*16:9*/ }}>
            <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameborder="0" height="621" src="https://www.youtube.com/embed/_MXtbjwsz3A" width="1261" title="YouTube Video"
                style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}>
            </iframe>
        </div>
    );
}