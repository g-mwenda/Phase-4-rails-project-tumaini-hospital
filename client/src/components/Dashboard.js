import React, { useState } from 'react';

function Dashboard() {
  const [activeSubpage, setActiveSubpage] = useState('');

  const showSubpage = (subpageId) => {
    setActiveSubpage(subpageId);
  };

  return (
    <div>
      <div className="d-flex justify-content-center" style={{ marginTop: '40px' }} id="btn">
        <div className="d-flex flex-column flex-md-row">
          <button className="btn mb-2 mb-md-0 me-md-3" onClick={() => showSubpage('subpage1')}>
            Pending applications
          </button>

          <button className="btn mb-2 mb-md-0 me-md-3" onClick={() => showSubpage('subpage3')}>
            My account
          </button>

          <button className="btn mb-2 mb-md-0 me-md-3" onClick={() => showSubpage('subpage2')}>
            Account settings
          </button>

          <button className="btn mb-2 mb-md-0 me-md-3" onClick={() => showSubpage('subpage4')}>
            Add user
          </button>
        </div>
      </div>

      {activeSubpage === 'subpage1' && (
        <div id="subpage1" className="subpage" style={{ marginTop: '20px' }}>
          <h3 className="text-center text-primary">Pending applications</h3>
        </div>
      )}

{activeSubpage === 'subpage2' && (
        <div id="subpage2" className="subpage" style={{ marginTop: '20px' }}>
          <h3 className="text-center text-primary">Pending applications</h3>
        </div>
      )}

{activeSubpage === 'subpage3' && (
        <div id="subpage3" className="subpage" style={{ marginTop: '20px' }}>
          <h3 className="text-center text-primary">Pending applications</h3>
        </div>
      )}

{activeSubpage === 'subpage4' && (
        <div id="subpage4" className="subpage" style={{ marginTop: '20px' }}>
          <h3 className="text-center text-primary">Pending applications</h3>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
