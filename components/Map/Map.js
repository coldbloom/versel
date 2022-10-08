import React from "react";

const Map = () => {
    return(
        <div className=''>
            {/*<script type="text/javascript" charSet="utf-8" async*/}
            {/*        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab2a0b6603e34a6407de19b494e680877d3785ff938b809067bfefe2453285776&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true">*/}
            {/*</script>*/}
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad60e32c3ddf4edead6d3d43e42bed673ba8a69a4d403e2ecda7198352c9d30ac&amp;source=constructor"
                width="100%" height="400" frameBorder="0"></iframe>
        </div>
    )
}

export default Map