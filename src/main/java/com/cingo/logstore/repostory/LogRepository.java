package com.cingo.logstore.repostory;

import java.util.List;

import javax.persistence.Query;

import com.cingo.logstore.entity.Log;

public class LogRepository extends Repository {

	public List<Log> findAllOrdened() {
		Query query = this.getManager().createQuery("SELECT e FROM Log e ORDER BY occurrences desc");
		return query.getResultList();
	}

	public void add(Log log) {
		if (this.alreadyExists(log.getContent())) {
			Log firstLogFound = this.getLogs(log.getContent()).get(0);
			firstLogFound.newOcurrence(log.getOccurrences());
			this.update(firstLogFound);
		} else {
			super.add(log);
		}
	}

	private boolean alreadyExists(String content) {
		return !this.getLogs(content).isEmpty();
	}

	private List<Log> getLogs(String content) {
		Query query = this.getManager().createQuery("SELECT e FROM Log e WHERE content = :content");
		query.setParameter("content", content);
		return query.getResultList();
	}

	public void deleteData(Integer id) {
		Query query = this.getManager().createQuery("SELECT e FROM Log e WHERE id = :id");
		query.setParameter("id", id);
		Log result = (Log) query.getSingleResult();
		try {
			this.delete(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
