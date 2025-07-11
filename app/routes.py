from flask import Flask, render_template, request, redirect, url_for, flash, session
from app.repository import get_companies, get_properties


def create_app():

    app = Flask(__name__)
    app.secret_key = "leasey-qa-test"


    def get_session_list(key):
        return session.get(key, [])


    def save_session_list(key, data_list):
        session[key] = data_list


    def init_session_data():
        if "companies" not in session:
            session["companies"] = get_companies()

        if "properties" not in session:
            session["properties"] = get_properties()


    @app.before_request
    def before_request():
        init_session_data()


    @app.route("/")
    def home():
        return redirect(url_for("list_properties"))


    @app.route("/create-company", methods=["GET"])
    def create_company():
        companies = get_session_list("companies")
        return render_template("create_company.html", companies=companies)


    @app.route("/companies", methods=["GET"])
    def list_companies():
        companies = get_session_list("companies")
        return render_template("list_companies.html", companies=companies)

    
    @app.route("/create-company", methods=["POST"])
    def post_company():
        name = request.form.get("name")
        company_type = request.form.get("type")
        email = request.form.get("email")

        if not name or not company_type:
            flash("Company name and type are required.", "error")
        else:
            companies = get_session_list("companies")
            companies.append({
                "name": name,
                "type": company_type,
                "email": email
            })
            save_session_list("companies", companies)
            flash("Company created successfully!", "success")

        return redirect(url_for("list_companies"))


    @app.route("/delete-company/<id>", methods=["POST"])
    def delete_company(id):
        companies = get_session_list("companies")
        updated = [c for c in companies if c["id"] != id]
        if len(updated) < len(companies):
            session["companies"] = updated
            flash("Company deleted.", "success")
        else:
            flash("Company not found.", "warning")
        return redirect(url_for("list_companies"))
    

    @app.route("/properties", methods=["GET"])
    def list_properties():
        properties = get_session_list("properties")
        return render_template("list_properties.html", properties=properties)


    @app.route("/create-property", methods=["GET"])
    def create_property():
        companies = get_session_list("companies")
        properties = get_session_list("properties")
        return render_template("create_property.html", companies=companies, properties=properties)


    @app.route("/create-property", methods=["POST"])
    def post_property():
        name = request.form.get("name")
        address = request.form.get("address")
        price = request.form.get("price")
        size = request.form.get("size")
        company_name = request.form.get("company")

        if not all([name, address, price, company_name]):
            flash("Property name, address, price, and company are required.", "error")
        elif not price.replace('.', '', 1).isdigit() or float(price) <= 0:
            flash("Price must be a positive number.", "error")
        else:
            properties = get_session_list("properties")
            properties.append({
                "name": name,
                "address": address,
                "price": float(price),
                "size": size,
                "company": company_name
            })
            save_session_list("properties", properties)
            flash("Property created successfully!", "success")

        return redirect(url_for("list_properties"))

    
    @app.route("/delete-property/<id>", methods=["POST"])
    def delete_property(id):
        properties = get_session_list("properties")
        updated = [p for p in properties if p["id"] != id]
        if len(updated) < len(properties):
            session["properties"] = updated
            flash("Property deleted.", "success")
        else:
            flash("Property not found.", "warning")
        return redirect(url_for("list_properties"))


    @app.route("/reset", methods=["POST"])
    def reset_session():
        session.clear()
        flash("Session data reset successfully.", "success")
        return redirect(url_for("home"))


    return app