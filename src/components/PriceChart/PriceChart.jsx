import "./PriceChart.css"


const PriceChart = () => {
    return (
        <div>
            <div className="pricing-table text-purple-800">
      {/* Basic Plan */}
      <div className="pricing-plan mt-4">
        <h2>Basic</h2>
        <div className="price">$99/mo</div>
        <ul className="features">
          <li>Listing on Website</li>
          <li>Photo Gallery</li>
          <li>Basic Support</li>
          <li>1 Featured Property</li>
        </ul>
        <button className="btn btn-info mt-4 w-2/3">Choose Basic</button>
      </div>
      
      {/* Premium Plan */}
      <div className="pricing-plan mt-4">
        <h2>Premium</h2>
        <div className="price">$199/mo</div>
        <ul className="features">
          <li>Listing on Website</li>
          <li>Photo & Video Gallery</li>
          <li>Priority Support</li>
          <li>3 Featured Properties</li>
          <li>Social Media Promotion</li>
        </ul>
        <button className="btn btn-info mt-4 w-2/3">Choose Premium</button>
      </div>
      
      {/* Elite Plan */}
      <div className="pricing-plan mt-4">
        <h2>Elite</h2>
        <div className="price">$299/mo</div>
        <ul className="features">
          <li>Exclusive Website Listing</li>
          <li>Photo, Video & 3D Tours</li>
          <li>24/7 Dedicated Support</li>
          <li>Unlimited Featured Properties</li>
          <li>Priority Social Media Promotion</li>
          <li>Custom Branding</li>
        </ul>
        <button className="btn btn-info mt-4 w-2/3">Choose Elite</button>
      </div>
    </div>
        </div>
    );
};

export default PriceChart;