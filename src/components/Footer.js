import React from 'react'

export default function Footer(){
    return(
        <footer>
            <div className="social-list">
                <ul className="socially">
                    <li class="social-list_item"><a href="https://github.com/jackokramer" class="social-list__link"><i class="fab fa-github-alt"></i></a></li>
                    <li class="social-list_item"><a href="https://www.linkedin.com/in/jack-kramer-73642157/" class="social-list__link"><i class="fab fa-linkedin"></i></a></li>
                    <li class="social-list_item"><a href="https://www.instagram.com/jackokramer/" class="social-list__link"><i class="fab fa-instagram"></i></a></li>
                    <li class="social-list_item"><a href="" class="social-list__link"></a></li>
                </ul>
            </div>
                    <small className="smalls"> © 2021 Kramer Development. </small>
                    <h6 className="smalls">All rights reserved</h6>
        </footer>
    )
}