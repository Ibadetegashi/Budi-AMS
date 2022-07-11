
export default function Slider() {
    return (
        <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">

            <div class="carousel-indicators">
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>


            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src="https://akologic.info/wp-content/uploads/2018/05/2.jpg" class="d-block w-100" alt="Sunset Over the City" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>


                <div class="carousel-item">
                    <img src="http://phama.com.au/wp-content/uploads/2021/06/FoodTank_agriculturesubsidiesworldbankreport.jpg" class="d-block w-200" alt="Canyon at Nigh" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>


                <div class="carousel-item">
                    <img src="https://images.squarespace-cdn.com/content/v1/59a706d4f5e2319b70240ef9/1598971164694-F75Y7VUAHC6TLFJXLCWF/veggies.jpg" class="d-block w-100" alt="Cliff Above a Stormy Sea" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}