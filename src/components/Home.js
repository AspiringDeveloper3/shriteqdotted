import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="home container mt-5">
            <h1 className='dotted'>Dotted 1.0</h1>
            <h3 className='dotted-below'>Connect the dots. See the larger picture.</h3>
            <img
                src="https://s3-alpha-sig.figma.com/img/36c1/0317/91b4a729da1d44211149539a109ae128?Expires=1699833600&Signature=h3~XlBmncMwNz1uWeIRoiCAYFNKd3TAmVQy5Nc4GJxdHn-w1AZpjvKeYkXuy9x7ylPNv3Wr50KmqtKSXgk-fPPXTCPfHIBd4WrGaODLZR6rpvfj6ohrcHGjffvXSE1F2nj2uKhR9HE09d0flfLoR1eCozpdd0wxF~-sT8e4X-ve6OwilJ~3pdvSvbGT2nmMTo1VX6oiXw-yKH4NA0gd~oA9aUlS-q90vhS5~ho4jvuy8VqsY5Uo2EKMoUhPvm-kfEqueGAh5BDBPInxCWAzGJMWEEFVrBNGVTilagzGpEHsqfeED8~dYaKwrdlST-PZaLtM2jcubDrGAcqBk91AbOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Dotted"
                className="img-fluid mt-0"
            />
        </div>
    );
};

export default Home;
